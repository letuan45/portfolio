import { sendMail } from "@/lib/mail";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, title, description } = await req.json();
  try {
    await sendMail({
      to: "lelamtuan4501@gmail.com",
      hrEmail: email,
      subject: title,
      body: `<h5 style="font-size: 20px">${description}</h5>`,
    });
    return NextResponse.json({ message: "success" });
  } catch (error) {
    throw error;
  }
}
