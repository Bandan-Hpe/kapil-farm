import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, number, email } = body;
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    console.log(process.env.EMAIL_PASS);

    const mailData = {
      from: process.env.EMAIL_USER,
      // to: "dm@kapilfarms.in",
      to: "bandan472000@gmail.com",
      subject: `New Lead From Website`,
      html: `<h1>Full Name: ${name}</h1>
      <h1>Number: ${number}</h1>
          <h1>Email:${email}</h1>`,
    };
    await transporter.sendMail(mailData);
    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Email not sent",
      error,
    });
  }
}
