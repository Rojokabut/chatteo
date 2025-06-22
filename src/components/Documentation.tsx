// app/components/MainPanel.tsx
"use client";
import React from "react";


export default function Documentation() {
  return (
    <div className="flex flex-col gap-8 h-full">
      <div className="flex-1 overflow-y-auto bg-violet-50 rounded-xl p-6 my-4 shadow-inner min-h-[200px] max-h-[700px]">
        <h1 className="text-3xl font-extrabold text-violet-800 mb-4">Documentation Gemini API (Google Generative AI)</h1>
        <section className="mb-6">
          <h2 className="text-xl font-bold text-violet-700 mb-2">1. Introduction</h2>
          <p className="text-gray-700">L&apos;API Gemini de Google permet d&apos;intégrer des fonctionnalités avancées d&apos;intelligence artificielle générative (texte, code, etc.) dans vos applications. Elle est accessible via le package <span className='font-mono bg-gray-200 px-1 rounded'>@google/generative-ai</span> pour Node.js.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold text-violet-700 mb-2">2. Prérequis</h2>
          <ul className="list-disc list-inside text-gray-700 mb-2">
            <li>Un compte Google Cloud avec accès à l&apos;API Gemini</li>
            <li>Une clé API Gemini (<a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-violet-700 underline">obtenir une clé</a>)</li>
            <li>Node.js installé sur votre machine</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold text-violet-700 mb-2">3. Installation du package</h2>
          <pre className="bg-gray-100 rounded p-3 text-sm overflow-x-auto mb-2"><code>{`npm install @google/generative-ai`}</code></pre>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold text-violet-700 mb-2">4. Exemple d&apos;utilisation Node.js</h2>
          <span className="text-gray-700">Exemple de génération de texte avec Gemini :</span>
          <pre className="bg-gray-100 rounded p-3 text-sm overflow-x-auto"><code>{`const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("VOTRE_CLE_API");

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent("Bonjour, peux-tu m'aider ?");
  const response = await result.response;
  const text = await response.text();
  console.log(text);
}

run();`}</code></pre>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold text-violet-700 mb-2">5. Bonnes pratiques</h2>
          <ul className="list-disc list-inside text-gray-700 mb-2">
            <li>Ne partagez jamais votre clé API publiquement.</li>
            <li>Gérez les erreurs réseau et les quotas d&apos;utilisation.</li>
            <li>Consultez la <a href="https://ai.google.dev/docs" target="_blank" rel="noopener noreferrer" className="text-violet-700 underline">documentation officielle Gemini</a> pour plus d&apos;options (multimodal, paramètres avancés, etc.).</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold text-violet-700 mb-2">6. Ressources utiles</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><a href="https://ai.google.dev/docs" target="_blank" rel="noopener noreferrer" className="text-violet-700 underline">Documentation officielle Gemini</a></li>
            <li><a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-violet-700 underline">Obtenir une clé API Gemini</a></li>
            <li><a href="https://www.npmjs.com/package/@google/generative-ai" target="_blank" rel="noopener noreferrer" className="text-violet-700 underline">@google/generative-ai sur npm</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}
