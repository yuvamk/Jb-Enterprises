import { NextRequest, NextResponse } from 'next/server';
import { getCollection } from '@/lib/mongodb';
import { sendNewsletterWelcomeEmail } from '@/lib/email';

// Newsletter subscriber interface
interface Subscriber {
    email: string;
    subscribedAt: Date;
    source: string;
    active: boolean;
}

// Simple rate limiting (in-memory, resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 3; // 3 requests per hour

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record || now > record.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        return true;
    }

    if (record.count >= MAX_REQUESTS) {
        return false;
    }

    record.count++;
    return true;
}

export async function POST(request: NextRequest) {
    try {
        // Get client IP for rate limiting
        const ip = request.headers.get('x-forwarded-for') ||
            request.headers.get('x-real-ip') ||
            'unknown';

        // Check rate limit
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again later.' },
                { status: 429 }
            );
        }

        // Parse request body
        const body = await request.json();
        const { email, source } = body;

        // Validate email
        if (!email) {
            return NextResponse.json(
                { error: 'Email is required.' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format.' },
                { status: 400 }
            );
        }

        const normalizedEmail = email.trim().toLowerCase();

        // Get subscribers collection
        const subscribersCollection = await getCollection<Subscriber>('subscribers');

        // Check if email already exists
        const existingSubscriber = await subscribersCollection.findOne({
            email: normalizedEmail
        });

        if (existingSubscriber) {
            if (existingSubscriber.active) {
                return NextResponse.json(
                    { error: 'This email is already subscribed to our newsletter.' },
                    { status: 409 }
                );
            } else {
                // Reactivate subscription
                await subscribersCollection.updateOne(
                    { email: normalizedEmail },
                    {
                        $set: {
                            active: true,
                            subscribedAt: new Date(),
                            source: source || 'unknown'
                        }
                    }
                );

                // Send welcome email
                try {
                    await sendNewsletterWelcomeEmail(normalizedEmail);
                } catch (emailError) {
                    console.error('Welcome email failed:', emailError);
                    // Don't fail the request if email fails
                }

                return NextResponse.json(
                    {
                        success: true,
                        message: 'Welcome back! Your subscription has been reactivated.',
                    },
                    { status: 200 }
                );
            }
        }

        // Create new subscriber
        const result = await subscribersCollection.insertOne({
            email: normalizedEmail,
            subscribedAt: new Date(),
            source: source || 'unknown',
            active: true,
        });

        // Send welcome email
        try {
            await sendNewsletterWelcomeEmail(normalizedEmail);
        } catch (emailError) {
            console.error('Welcome email failed:', emailError);
            // Don't fail the request if email fails
        }

        return NextResponse.json(
            {
                success: true,
                message: 'Thank you for subscribing! Check your email for a welcome message.',
                id: result.insertedId,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('Newsletter subscription error:', error);

        // Check if it's a MongoDB error
        if (error instanceof Error && error.message.includes('ECONNREFUSED')) {
            return NextResponse.json(
                {
                    error: 'Database service is currently unavailable. Please try again later.',
                    details: process.env.NODE_ENV === 'development' ? error.message : undefined
                },
                { status: 503 }
            );
        }

        return NextResponse.json(
            {
                error: 'An error occurred while processing your subscription. Please try again.',
                details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
            },
            { status: 500 }
        );
    }
}
