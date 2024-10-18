import connectMongoDB from "@/libs/mongodb";
import ContactForm from "@/models/contactForm";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, message } = await request.json();
  await connectMongoDB();
  await ContactForm.create({ name, email, message });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}
