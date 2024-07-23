import axios from 'axios'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { name, subject, email, phoneNumber, message } = body

    if (!name) {
      return new NextResponse('Name is required', { status: 400 })
    }

    if (!subject) {
      return new NextResponse('Subject is required', { status: 400 })
    }

    if (!email) {
      return new NextResponse('Email is required', { status: 400 })
    }

    if (!message) {
      return new NextResponse('Message is required', { status: 400 })
    }

    await axios.post(
      process.env.MAILTRAP_ENDPOINT!,
      {
        from: { email: 'mailtrap@jason-ramos.com', name: name },
        to: [{ email: 'ramosjasonwork@gmail.com' }],
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber || 'N/A'}\nMessage: ${message}`,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.MAILTRAP_TOKEN}`,
          'Content-Type': 'application/json',
        },
      },
    )

    return NextResponse.json({ message: 'Email sent successfully' })
  } catch (error) {
    console.log('[EMAIL_POST]', error)
    return new NextResponse('Internal server error', { status: 500 })
  }
}
