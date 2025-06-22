// app/components/MainPanel.tsx
"use client";
import React, { useState } from "react";
import PromptInput from "./PrompInput";
import Typewriter from "./Typewriter";


type Message = { from: "user" | "bot"; text: string };


export default function MainPanel() {
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <div className="flex flex-col gap-8 h-full">
      {/* Messages affichés ici */}
      <div className="flex-1 overflow-y-auto bg-violet-50 rounded-xl p-6 my-4 border border-violet-100 min-h-[200px] max-h-[500px]">
        {messages.length === 0 ? (
          <div className="text-center text-violet-400">Aucune conversation pour le moment.</div>
        ) : (
          <ul className="space-y-4">
            {messages.map((msg, idx) => (
              <li key={idx} className={msg.from === "user" ? "text-right" : "text-left"}>
                <span className={`inline-block px-4 py-2 rounded-2xl text-xs lg:text-sm font-medium ${msg.from === "user" ? "bg-violet-700 text-white" : "bg-white text-violet-600 border border-violet-200"}`}>
                  {msg.text === "L'IA réfléchit..." ? (
                    <span className="loading loading-dots loading-md"></span>
                  ) : msg.from === "bot" && (msg.text.includes("Erreur lors de la connexion") || msg.text.includes("Erreur Gemini API")) ? (
                    <span className=" text-red-500">verifier votre connexion</span>
                  ) : msg.from === "bot" ? (
                    <>
                      <span className="text-xs lg:text-sm"><Typewriter text={msg.text}/></span>
                      
                    </>
                    
                  ) : (
                    msg.text
                  )}
                </span>
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
