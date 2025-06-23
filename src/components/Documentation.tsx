"use client"

import CopyButton from "./CopyButton" // Import the new CopyButton component

export default function Documentation() {
  const pythonCode = `import google.generativeai as genai
import os

# Configurer la clé API
genai.configure(api_key=os.environ["GEMINI_API_KEY"])

# Initialiser le modèle
model = genai.GenerativeModel('gemini-pro')

# Générer du contenu
prompt = "Écrivez une courte histoire sur un robot qui découvre l'art."
response = model.generate_content(prompt)

print(response.text)`

  const nodejsCode = `import { GoogleGenerativeAI } from "@google/generative-ai";

// Accédez à votre clé API en tant que variable d'environnement (recommandé)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function run() {
  // Pour une entrée textuelle uniquement, utilisez le modèle gemini-pro
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = "Écrivez une courte histoire sur un robot qui découvre l'art.";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();`

  const curlCode = `curl -X POST \\
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=VOTRE_CLE_API" \\
  -H "Content-Type: application/json" \\
  -d '{
    "contents": [
      {
        "parts": [
          {"text": "Écrivez une courte histoire sur un robot qui découvre l'art."}
        ]
      }
    ]
  }'`

  const envVarCode = `export GEMINI_API_KEY="VOTRE_CLE_API"`

  return (
    <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-6 border-b pb-4 border-gray-200">
        Documentation de l&apos;API Gemini
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Découvrez comment intégrer l&apos;API Gemini dans vos applications à l&apos;aide de divers langages de
        programmation. L&apos;API Gemini donne accès aux modèles de langage avancés de Google.
      </p>

      {/* Section: Getting Started */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Démarrage rapide</h2>
        <p className="text-gray-700 mb-4">
          Avant de commencer, assurez-vous d&apos;avoir une clé API. Vous pouvez l&apos;obtenir depuis Google AI Studio.
          Il est recommandé de stocker votre clé API en toute sécurité, par exemple, comme variable
          d&apos;environnement.
        </p>
        <div className="bg-gray-50 p-4 rounded-md border border-gray-200 text-sm text-gray-700 relative">
          <p className="font-semibold mb-2">Exemple de variable d&apos;environnement :</p>
          <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto text-gray-800">
            <code>{envVarCode}</code>
          </pre>
          <CopyButton code={envVarCode} />
        </div>
      </section>

      {/* Section: Python Integration */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Python</h2>
        <p className="text-gray-700 mb-4">
          Utilisez la bibliothèque officielle `google-generativeai` pour interagir avec l&apos;API Gemini en Python.
        </p>
        <h3 className="text-2xl font-medium text-gray-800 mb-3">Installation</h3>
        <div className="relative">
          <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto mb-4 text-gray-800">
            <code>pip install google-generativeai</code>
          </pre>
          <CopyButton code="pip install google-generativeai" />
        </div>
        <h3 className="text-2xl font-medium text-gray-800 mb-3">Exemple : Générer du texte</h3>
        <div className="relative">
          <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto text-sm text-gray-800">
            <code>{pythonCode}</code>
          </pre>
          <CopyButton code={pythonCode} />
        </div>
      </section>

      {/* Section: Node.js Integration */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Node.js (JavaScript)</h2>
        <p className="text-gray-700 mb-4">
          Intégrez l&apos;API Gemini dans vos applications Node.js à l&apos;aide du package `@google/generative-ai`.
        </p>
        <h3 className="text-2xl font-medium text-gray-800 mb-3">Installation</h3>
        <div className="relative">
          <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto mb-4 text-gray-800">
            <code>npm install @google/generative-ai</code>
          </pre>
          <CopyButton code="npm install @google/generative-ai" />
        </div>
        <h3 className="text-2xl font-medium text-gray-800 mb-3">Exemple : Générer du texte</h3>
        <div className="relative">
          <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto text-sm text-gray-800">
            <code>{nodejsCode}</code>
          </pre>
          <CopyButton code={nodejsCode} />
        </div>
      </section>

      {/* Section: cURL Example */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">cURL</h2>
        <p className="text-gray-700 mb-4">
          Vous pouvez également interagir directement avec l&apos;API Gemini à l&apos;aide de cURL pour des tests
          rapides ou des scripts.
        </p>
        <h3 className="text-2xl font-medium text-gray-800 mb-3">Exemple : Générer du texte</h3>
        <div className="relative">
          <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto text-sm text-gray-800">
            <code>{curlCode}</code>
          </pre>
          <CopyButton code={curlCode} />
        </div>
      </section>

      {/* Section: Further Resources */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Ressources supplémentaires</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <a
              href="https://ai.google.dev/gemini-api/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-600 hover:underline"
            >
              Documentation officielle de l&apos;API Gemini
            </a>
          </li>
          <li>
            <a
              href="https://ai.google.dev/tutorials"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-600 hover:underline"
            >
              Tutoriels de l&apos;API Gemini
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}
