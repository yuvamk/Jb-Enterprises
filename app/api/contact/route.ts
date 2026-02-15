import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail, type ContactFormData } from '@/lib/email';

// Simple rate limiting (in-memory, resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5; // 5 requests per hour

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
        const { name, email, company, message } = body as ContactFormData;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required.' },
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

        // Validate message length
        if (message.length < 10) {
            return NextResponse.json(
                { error: 'Message must be at least 10 characters long.' },
                { status: 400 }
            );
        }

        if (message.length > 5000) {
            return NextResponse.json(
                { error: 'Message must be less than 5000 characters.' },
                { status: 400 }
            );
        }

        // Send emails using centralized email utility
        const result = await sendContactEmail({
            name: name.trim(),
            email: email.trim().toLowerCase(),
            company: company?.trim() || 'Not provided',
            message: message.trim(),
        });

        return NextResponse.json(
            {
                success: true,
                message: 'Thank you for your message. We will get back to you soon!',
                emailIds: result,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', error);

        // Check if it's an email sending error
        if (error instanceof Error && error.message.includes('SMTP')) {
            return NextResponse.json(
                {
                    error: 'Email service is currently unavailable. Please try again later or contact us directly.',
                    details: process.env.NODE_ENV === 'development' ? error.message : undefined
                },
                { status: 503 }
            );
        }

        return NextResponse.json(
            {
                error: 'An error occurred while processing your request. Please try again.',
                details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
            },
            { status: 500 }
        );
    }
}
