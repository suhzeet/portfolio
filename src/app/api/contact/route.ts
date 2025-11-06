import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } =
      (await request.json()) as ContactRequestBody;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Send email using Resend
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: process.env.MY_EMAIL!,
      reply_to: email,
      subject: `New Contact from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(
      {
        message: "Message sent successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to send message";
    return NextResponse.json(
      {
        message: errorMessage,
      },
      {
        status: 500,
      }
    );
  }
}
