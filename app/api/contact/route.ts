import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone } = await request.json();

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Here you would typically send the email or save to database
    console.log('Contact form submission:', { name, email, phone });

    // Simulate email sending (in production, use Resend, SendGrid, etc.)
    // try {
    //   await sendEmail({
    //     to: 'info@premiumcommercial.com',
    //     subject: `New Contact Form Submission from ${name}`,
    //     html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p>`,
    //   });
    // } catch (emailError) {
    //   console.error('Email sending failed:', emailError);
    // }

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
