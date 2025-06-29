"use client";

import { useState, useRef } from "react";
import { SendHorizonal, Square } from "lucide-react";

type Message = { from: "user" | "bot"; text: string };

export default function PromptInput({
  messages,
  setMessages,
}: {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const typingInterval = useRef<NodeJS.Timeout | null>(null); // pour garder une référence sur setInterval
  const fullBotMessage = useRef<string>(""); // pour stocker le message complet

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
      console.log(err);
      return "!Vérifiez votre connexion.";
    }
  };

  const onSend = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setIsTyping(false); // reset avant envoi
    const userMessage = input;
    setInput("");

    setMessages((prev) => [
      ...prev,
      { from: "user", text: userMessage },
      { from: "bot", text: "", thinking: true }, // 🧠 indicateur spécial
    ]);
    

    const messageFromAI = await SendMessage(userMessage);
    fullBotMessage.current = messageFromAI;

    let i = 0;
    const speed = 25;

    setIsTyping(true);

    typingInterval.current = setInterval(() => {
      setMessages((prev) => {
        const updated = [...prev];
        const botIdx = updated.map((m) => m.from).lastIndexOf("bot");
        if (botIdx !== -1) {
          updated[botIdx] = {
            from: "bot",
            text: messageFromAI.slice(0, i + 1),
          };
        }
        return updated;
      });

      i++;
      if (i >= messageFromAI.length) {
        if (typingInterval.current) clearInterval(typingInterval.current);
        typingInterval.current = null;
        setIsTyping(false);
        setLoading(false);
      }
    }, speed);
  };

  const CutTyping = () => {
    if (typingInterval.current) {
      clearInterval(typingInterval.current);
      typingInterval.current = null;
    }

    setMessages((prev) => {
      const updated = [...prev];
      const botIdx = updated.map((m) => m.from).lastIndexOf("bot");
      if (botIdx !== -1) {
        updated[botIdx] = {
          from: "bot",
          text: fullBotMessage.current, // afficher tout de suite le texte complet
        };
      }
      return updated;
    });

    setIsTyping(false);
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
        className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none"
      />
      {isTyping ? (
        <button
          onClick={CutTyping}
          className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
        >
          <Square />
        </button>
      ) : (
        <button
          disabled={!input.trim()}
          onClick={onSend}
          className="bg-violet-600 text-white p-2 rounded-full hover:bg-violet-700"
        >
          <SendHorizonal />
        </button>
      )}
    </div>
  );
}
