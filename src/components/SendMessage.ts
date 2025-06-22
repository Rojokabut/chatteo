import { GoogleGenerativeAI } from "@google/generative-ai";
// import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function SendMessage(message : string) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(message);
    const response = await result.response;
    const text = await response.text();
    return text;
  } catch (error) {
    console.log("Erreur de gemini")
    console.error("Erreur Gemini API :", error);
    // return NextResponse.json({ success: false, error: "Erreur Gemini API" }, { status: 500 });
    return "Erreur lors de la connexion à Gemini.";
  }
}
