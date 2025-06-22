// app/components/MainPanel.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import sary from '@/assets/images/sary.png'

export default function About() {
  return (
    <div className="flex flex-col md:flex-row gap-8 h-full items-center justify-center p-4">
      {/* Photo/Logo à gauche */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex-shrink-0 flex flex-col items-center"
      >
        <Image
          src={sary}
          alt="Rojo Niaina - Développeur"
          width={120}
          height={120}
          className="rounded-full border-4 border-violet-200 shadow-lg bg-white"
        />
        <span className="mt-4 text-lg font-bold text-violet-800">Rojo Niaina</span>
        <span className="text-sm text-gray-500">Développeur Fullstack</span>
      </motion.div>

      {/* Texte à droite */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex-1 bg-violet-50 rounded-xl p-6 shadow-inner min-h-[200px] max-h-[500px] flex flex-col justify-between"
      >
        <div>
          <h2 className="text-2xl font-extrabold text-violet-900 mb-2">À propos du projet</h2>
          <p className="text-gray-700 mb-4">
            <span className="font-bold text-violet-800">Chatteo</span> est une plateforme de messagerie intelligente, simple et sécurisée, propulsée par l&apos;intelligence artificielle. Elle vise à offrir une expérience de discussion moderne, intuitive et collaborative, tout en garantissant la confidentialité et la sécurité des échanges.
          </p>
          <h3 className="text-xl font-bold text-violet-800 mb-1">Mon expérience sur ce projet</h3>
          <p className="text-gray-700 mb-4">
            En tant que développeur fullstack passionné par l&apos;IA et les technologies web, j&apos;ai conçu et développé Chatteo pour répondre aux besoins actuels de communication intelligente. Ce projet m&apos;a permis de renforcer mes compétences en React, Next.js, intégration d&apos;API IA (Gemini), et design UX/UI moderne. Mon objectif : créer un outil fiable, performant et agréable à utiliser pour tous.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-6 border-t pt-4 border-violet-100">
          <div className="flex flex-col gap-1 text-sm text-gray-600">
            <span className="font-semibold text-violet-700">Contact :</span>
            <a href="mailto:exemple.email@email.com" className="hover:underline text-violet-700">exemple.email@email.com</a>
          </div>
          {/* Ajoute ici tes liens LinkedIn, GitHub, etc. */}
          {/* <a href="https://linkedin.com/in/tonprofil" target="_blank" rel="noopener noreferrer" className="text-violet-700 hover:underline font-medium">LinkedIn</a> */}
          {/* <a href="https://github.com/tonprofil" target="_blank" rel="noopener noreferrer" className="text-violet-700 hover:underline font-medium">GitHub</a> */}
        </div>
        <div className="text-xs text-gray-400 mt-4">© 2024 Rojo Niaina. Tous droits réservés.</div>
      </motion.div>
    </div>
  );
}
