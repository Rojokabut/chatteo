// app/components/MainPanel.tsx
"use client";
import React, { useState } from "react";
import PromptInput from "./PrompInput";
import Markdown from "react-markdown";
import { RotateCcw } from "lucide-react";

type Message = { from: "user" | "bot"; text: string; thinking?: boolean };

// Ajout de la fonction d'appel API ici (copiée de PromptInput)
async function fetchBotResponse(prompt: string) {
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
}

export default function MainPanel() {
  const [messages, setMessages] = useState<Message[]>([]);

  // Fonction de régénération d'un message bot
  const regenerateBotMessage = async (botIdx: number) => {
    // Chercher le prompt utilisateur juste avant ce bot
    let userIdx = botIdx - 1;
    while (userIdx >= 0 && messages[userIdx].from !== "user") {
      userIdx--;
    }
    if (userIdx < 0) return; // Pas de prompt utilisateur trouvé
    const userPrompt = messages[userIdx].text;

    // Mettre à jour le message bot en "thinking"
    setMessages((prev) => {
      const updated = [...prev];
      updated[botIdx] = { from: "bot", text: "", thinking: true };
      return updated;
    });

    // Appel API et animation
    const messageFromAI = await fetchBotResponse(userPrompt);
    let i = 0;
    const speed = 25;
    const interval = setInterval(() => {
      setMessages((prev) => {
        const updated = [...prev];
        if (updated[botIdx]) {
          updated[botIdx] = {
            from: "bot",
            text: messageFromAI.slice(0, i + 1),
          };
        }
        return updated;
      });
      i++;
      if (i >= messageFromAI.length) {
        clearInterval(interval);
      }
    }, speed);
  };

  return (
    <div className="flex flex-col gap-8 h-full">
      {/* Messages affichés ici */}
      <div className="flex-1 overflow-y-auto bg-violet-50 rounded-xl p-6 my-4 border border-violet-100 min-h-[200px] max-h-[500px]">
        {messages.length === 0 ? (
          <div className="text-center text-violet-400">Aucune conversation pour le moment.</div>
        ) : (
          <ul className="space-y-4">
            {messages.map((msg, idx) => (
              <li key={idx} className={ msg.from === "user" ? "text-right" : "text-left"} >
                <span className={`inline-block px-4 py-2 rounded-2xl text-xs lg:text-sm font-medium ${msg.from === "user" ? "bg-violet-700 text-white" : "bg-white text-violet-600 border border-violet-200"}`}>
                  {msg.thinking ?(
                    <span className="loading loading-dots loading-xs"></span>
                  ) : msg.from === "bot" && (msg.text.includes("Erreur lors de la connexion") || msg.text.includes("Erreur Gemini API")) ? (
                    <span className=" text-red-500">verifier votre connexion</span>
                  ) : msg.from === "bot" ? (
                    <>
                      <span className="text-xs lg:text-sm"><Markdown>{msg.text}</Markdown></span>
                    </>
                  ) : (
                    msg.text
                  )}
                </span>
                {/* Affichage du bouton de régénération SOUS le message du bot, aligné à droite */}
                {msg.from === "bot" && (
                  <div className="flex justify-start px-2">
                    <button
                      className="p-1 rounded hover:bg-violet-100"
                      title="Régénérer la réponse"
                      onClick={() => regenerateBotMessage(idx)}
                    >
                      <RotateCcw stroke="gray" width={12} height={12}/>
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 👇 PromptInput reçoit les messages et la fonction de mise à jour */}
      <PromptInput messages={messages} setMessages={setMessages} />
    </div>
  );
}
