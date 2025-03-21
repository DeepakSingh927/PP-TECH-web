import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, email, subject, phone, message, topic } = await req.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email configuration');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    try {
      // Save contact data to the database
      const contact = await prisma.contact.create({
        data: { name, email, subject, phone, message, topic },
      });
      console.log('Contact saved to database:', contact);
    } catch (dbError) {
      console.error('Database error:', dbError);
      // Continue with email sending even if DB fails
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify SMTP connection
    await transporter.verify();

    // Send the email
    const emailInfo = await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: 'deepaksinghh217@gmail.com', // contact@ppdesigntech.com
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
        Topic: ${topic}
      `,
    });
    console.log('Email sent:', emailInfo);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Detailed server error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send message',
        details: error.message 
      },
      { status: 500 }
    );
  }
}