import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { name, email, subject, phone, message, topic } = await req.json();

  try {
    // Save contact data to the database
    const contact = await prisma.contact.create({
      data: { name, email, subject, phone, message, topic },
    });

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
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`, // Sender address
      to: 'contact@ppdesigntech.com', // Receiver address
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Topic: ${topic}
        Message: ${message}
      `,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Topic:</strong> ${topic}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Contact saved and email sent successfully', data: contact },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in contact API:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process request' },
      { status: 500 }
    );
  }
}