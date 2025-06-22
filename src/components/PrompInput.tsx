// app/components/PromptInput.tsx
"use client";

import { useState } from "react";
import { SendHorizonal } from "lucide-react";

type Message = { from: "user" | "bot"; text: string };

export default function PromptInput({
  setMessages,
}: {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const SendMessage = async (prompt: string) => {
    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      if (!res.ok) {
        return "Erreur lors de la connexion à Gemini.";
      }
      const data = await res.json();
      return data.text;
    } catch (err) {
      return "!Vérifier votre connexion.";
      console.log(err)
    }
  };

  const onSend = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const userMessage = input;
    setInput("");
    setMessages((prev) => [
      ...prev,
      { from: "user", text: userMessage },
      { from: "bot", text: "L'IA réfléchit..." },
    ]);

    const botMessage = await SendMessage(userMessage);
    setMessages((prev) => {
      const newMessages = [...prev];
      const lastBotIdx = newMessages.map(m => m.from).lastIndexOf("bot");
      if (lastBotIdx !== -1) {
        newMessages[lastBotIdx] = { from: "bot", text: botMessage };
      } else {
        newMessages.push({ from: "bot", text: botMessage });
      }
      return newMessages;
    });
    setLoading(false);
  };

  return (
    <div className="flex gap-2 items-center pt-4">
      <input
        type="text"
        value={input}
        disabled={loading}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSend()}
        placeholder="Posez une question à l'IA..."
        className="flex-1 px-4 py-2 border rounded-full focus:outline-none"
      />
      <button
        disabled={loading || !input.trim()}
        onClick={onSend}
        className="bg-violet-600 text-white p-2 rounded-full hover:bg-violet-700"
      >
        <SendHorizonal />
      </button>
    </div>
  );
}
