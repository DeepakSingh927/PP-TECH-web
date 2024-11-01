import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { name, email, subject, phone, message } = await req.json();

  try {
    const contact = await prisma.contact.create({
      data: { name, email, subject, phone, message },
    });

    return NextResponse.json({ success: true, data: contact }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Failed to save data' }, { status: 500 });
  }
}
