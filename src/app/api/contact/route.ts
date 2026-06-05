import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Email template
function getEmailTemplate(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  return `
    <div style="font-family: 'Cormorant Garamond', serif; max-width: 600px; margin: 0 auto; background-color: #0a0a0a; color: #f3f4f6;">
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #ef2a28, #ff4444, #ef2a28); padding: 40px; text-align: center;">
        <h1 style="margin: 0; font-size: 32px; font-weight: bold; letter-spacing: 2px;">DHAGAJI</h1>
        <p style="margin: 8px 0 0 0; font-size: 14px; opacity: 0.9;">Handcrafted Heritage</p>
      </div>

      <!-- Content -->
      <div style="padding: 40px; background-color: #141414;">
        <h2 style="color: #ef2a28; font-size: 24px; margin-bottom: 20px;">New Enquiry Received</h2>
        
        <div style="margin-bottom: 30px; line-height: 1.8;">
          <p style="margin: 0 0 15px 0;"><strong style="color: #ef2a28;">Name:</strong><br/>${data.name}</p>
          <p style="margin: 0 0 15px 0;"><strong style="color: #ef2a28;">Email:</strong><br/><a href="mailto:${data.email}" style="color: #ef2a28; text-decoration: none;">${data.email}</a></p>
          <p style="margin: 0 0 15px 0;"><strong style="color: #ef2a28;">Phone:</strong><br/><a href="tel:${data.phone}" style="color: #ef2a28; text-decoration: none;">${data.phone}</a></p>
          <p style="margin: 0;"><strong style="color: #ef2a28;">Message:</strong><br/>${data.message.replace(/\n/g, '<br/>')}</p>
        </div>

        <hr style="border: none; border-top: 1px solid #2a2a2a; margin: 30px 0;" />

        <p style="font-size: 12px; color: #6b7280; margin: 0;">
          This enquiry was submitted through the DHAGAJI website contact form.
        </p>
      </div>

      <!-- Footer -->
      <div style="background-color: #1a1a1a; padding: 20px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #2a2a2a;">
        <p style="margin: 0;">© ${new Date().getFullYear()} DHAGAJI. All rights reserved.</p>
      </div>
    </div>
  `;
}

// Customer confirmation email template
function getCustomerConfirmationTemplate(name: string) {
  return `
    <div style="font-family: 'Cormorant Garamond', serif; max-width: 600px; margin: 0 auto; background-color: #0a0a0a; color: #f3f4f6;">
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #ef2a28, #ff4444, #ef2a28); padding: 40px; text-align: center;">
        <h1 style="margin: 0; font-size: 32px; font-weight: bold; letter-spacing: 2px;">DHAGAJI</h1>
        <p style="margin: 8px 0 0 0; font-size: 14px; opacity: 0.9;">Handcrafted Heritage</p>
      </div>

      <!-- Content -->
      <div style="padding: 40px; background-color: #141414;">
        <h2 style="color: #ef2a28; font-size: 24px; margin-bottom: 20px;">Thank You for Your Enquiry</h2>
        
        <p style="font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          Dear <strong>${name}</strong>,
        </p>

        <p style="font-size: 14px; line-height: 1.8; color: #d1d5db; margin-bottom: 20px;">
          We have received your enquiry and appreciate your interest in DHAGAJI. Our team will review your message and get back to you within <strong>24 hours</strong> with personalized recommendations for your bridal collection.
        </p>

        <p style="font-size: 14px; line-height: 1.8; color: #d1d5db; margin-bottom: 20px;">
          In the meantime, feel free to explore our collection or reach out directly:
        </p>

        <div style="background-color: #1a1a1a; padding: 20px; border-left: 3px solid #ef2a28; margin-bottom: 20px;">
          <p style="margin: 0 0 10px 0; font-size: 12px; text-transform: uppercase; color: #ef2a28; font-weight: bold;">Contact Information</p>
          <p style="margin: 5px 0; font-size: 14px;"><strong>Phone/WhatsApp:</strong> +91 141 400 8282</p>
          <p style="margin: 5px 0; font-size: 14px;"><strong>Email:</strong> hello@DHAGAJI.in</p>
          <p style="margin: 5px 0; font-size: 14px;"><strong>Studio:</strong> 42 Gem Palace Road, Johari Bazaar, Jaipur</p>
        </div>

        <p style="font-size: 14px; line-height: 1.8; color: #d1d5db;">
          Warm regards,<br/>
          <strong>DHAGAJI Team</strong>
        </p>
      </div>

      <!-- Footer -->
      <div style="background-color: #1a1a1a; padding: 20px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #2a2a2a;">
        <p style="margin: 0;">© ${new Date().getFullYear()} DHAGAJI. All rights reserved.</p>
      </div>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const { name, email, phone, message } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.length < 5) {
      return NextResponse.json(
        { error: 'Message must be at least 5 characters' },
        { status: 400 }
      );
    }

    // Send email to owner
    const ownerEmail = process.env.OWNER_EMAIL || process.env.CONTACT_EMAIL;
    if (!ownerEmail) {
      return NextResponse.json(
        { error: 'Email configuration error' },
        { status: 500 }
      );
    }
    
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: ownerEmail,
      subject: `New Enquiry from ${name} - DHAGAJI`,
      html: getEmailTemplate({ name, email, phone, message }),
      replyTo: email,
    });

    // Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'We received your enquiry - DHAGAJI',
      html: getCustomerConfirmationTemplate(name),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Enquiry sent successfully. Check your email for confirmation.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      {
        error: 'Failed to send enquiry. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? String(error) : undefined,
      },
      { status: 500 }
    );
  }
}
