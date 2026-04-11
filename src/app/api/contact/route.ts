import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, country, message } = await req.json();

    const data = await resend.emails.send({
      from: 'Contact Form <libres.kathrinamirasol.sumaya@gmail.com>', 
      to: ['libres.kathrinamirasol.sumaya@gmail.com'], // Where you want to receive the mail
      subject: `New Project Inquiry from ${firstName} ${lastName}`,
      html: `
        <h2>New Inquiry Details:</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}