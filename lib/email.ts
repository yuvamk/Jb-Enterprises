import nodemailer from 'nodemailer';

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

/**
 * Send contact form email to company and confirmation to user
 */
export async function sendContactEmail(data: ContactFormData) {
  const { name, email, company, message } = data;

  // Send email to company
  const companyEmail = await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a2332; border-bottom: 3px solid #ff6b35; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        <div style="margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f5f5f5; padding: 15px; border-left: 4px solid #ff6b35; margin: 10px 0;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
        <p style="color: #666; font-size: 12px; margin-top: 30px;">
          This email was sent from the JB Enterprise contact form.
        </p>
      </div>
    `,
    text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Company: ${company}

Message:
${message}
    `,
  });

  // Send confirmation email to user
  const userEmail = await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: email,
    subject: 'Thank you for contacting JB Enterprise',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1a2332 0%, #2d3e50 100%); color: white; padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">JB Enterprise</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Power Plant Solutions</p>
        </div>
        <div style="padding: 30px; background: white;">
          <h2 style="color: #1a2332; margin-top: 0;">Thank you for your inquiry!</h2>
          <p>Dear ${name},</p>
          <p>We have received your message and appreciate you taking the time to contact us.</p>
          <p>Our team will review your inquiry and get back to you within 24-48 hours.</p>
          <div style="background: #f5f5f5; padding: 15px; border-left: 4px solid #ff6b35; margin: 20px 0;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              <strong>Your message:</strong><br>
              ${message.substring(0, 150)}${message.length > 150 ? '...' : ''}
            </p>
          </div>
          <p>Best regards,<br><strong>JB Enterprise Team</strong></p>
        </div>
        <div style="background: #f5f5f5; padding: 20px; text-align: center; color: #666; font-size: 12px;">
          <p style="margin: 0;">JB Enterprise - Power Plant Solutions & Services</p>
          <p style="margin: 5px 0 0 0;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}" style="color: #ff6b35; text-decoration: none;">
              Visit our website
            </a>
          </p>
        </div>
      </div>
    `,
    text: `
Thank you for your inquiry!

Dear ${name},

We have received your message and appreciate you taking the time to contact us.

Our team will review your inquiry and get back to you within 24-48 hours.

Your message:
${message}

Best regards,
JB Enterprise Team

---
JB Enterprise - Power Plant Solutions & Services
${process.env.NEXT_PUBLIC_SITE_URL}
    `,
  });

  return {
    companyEmailId: companyEmail.messageId,
    userEmailId: userEmail.messageId,
  };
}

/**
 * Send newsletter welcome email
 */
export async function sendNewsletterWelcomeEmail(email: string) {
  const result = await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: email,
    subject: 'Welcome to JB Enterprise Newsletter',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1a2332 0%, #2d3e50 100%); color: white; padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">Welcome to JB Enterprise!</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Thank you for subscribing</p>
        </div>
        <div style="padding: 30px; background: white;">
          <h2 style="color: #1a2332; margin-top: 0;">You're all set!</h2>
          <p>Thank you for subscribing to the JB Enterprise newsletter.</p>
          <p>You'll now receive:</p>
          <ul style="color: #666;">
            <li>Industry insights and trends</li>
            <li>Technical guides and best practices</li>
            <li>Product updates and announcements</li>
            <li>Exclusive content and resources</li>
          </ul>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/blog" 
               style="background: linear-gradient(135deg, #ff6b35 0%, #ffa500 100%); 
                      color: white; 
                      padding: 12px 30px; 
                      text-decoration: none; 
                      border-radius: 5px; 
                      display: inline-block;">
              Read Our Blog
            </a>
          </div>
          <p style="color: #666; font-size: 14px;">
            Stay tuned for our next newsletter!
          </p>
        </div>
        <div style="background: #f5f5f5; padding: 20px; text-align: center; color: #666; font-size: 12px;">
          <p style="margin: 0;">JB Enterprise - Power Plant Solutions & Services</p>
          <p style="margin: 10px 0 0 0; font-size: 11px;">
            You received this email because you subscribed to our newsletter.
          </p>
        </div>
      </div>
    `,
    text: `
Welcome to JB Enterprise Newsletter!

Thank you for subscribing to the JB Enterprise newsletter.

You'll now receive:
- Industry insights and trends
- Technical guides and best practices
- Product updates and announcements
- Exclusive content and resources

Stay tuned for our next newsletter!

---
JB Enterprise - Power Plant Solutions & Services
${process.env.NEXT_PUBLIC_SITE_URL}
    `,
  });

  return result.messageId;
}

/**
 * Verify email configuration
 */
export async function verifyEmailConfig() {
  try {
    await transporter.verify();
    return true;
  } catch (error) {
    console.error('Email configuration error:', error);
    return false;
  }
}
