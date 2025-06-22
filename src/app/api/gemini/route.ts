// app/api/gemini/route.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    return NextResponse.json({ success: true, text: text ?? "" });
  } catch (error) {
    console.error("Erreur Gemini API :", error);
    return NextResponse.json({ success: false, error: "Erreur Gemini API" }, { status: 500 });
  }
}
