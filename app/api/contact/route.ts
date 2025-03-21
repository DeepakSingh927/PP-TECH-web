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

    // Save contact data to the database
    const contact = await prisma.contact.create({
      data: { name, email, subject, phone, message, topic },
    });
    console.log('Contact saved to database:', contact);

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Use your email provider's SMTP server
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Send the email
    const emailInfo = await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`, // Sender address
      to: 'deepaksinghh217@gmail.com', // Receiver address  contact@ppdesigntech.com
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
    console.error('Server error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    );
  }
}