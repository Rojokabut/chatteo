// app/components/MainPanel.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { UserCircle , Github} from "lucide-react";
import React from "react";
import sary from '@/assets/images/sary.png'
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-4 gap-2 items-center justify-center p-4">
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
        <div className="mt-3 flex lg:flex-col flex-row gap-2 mb-5">
          <Link href="https://portfolio-rojoniaina.vercel.app/" className="flex space-x-2 items-center bg-violet-800 border border-violet-800 text-white px-4 py-2 rounded-xl hover:bg-white hover:text-violet-800 hover:border hover:border-gray-300 ">
            <UserCircle width={20} height={20} />
            <span>Portfolio</span>
          </Link>
          <Link href="https://github.com/Rojokabut" className="flex space-x-2 items-center hover:bg-violet-800 border hover:border-violet-800 hover:text-white px-4 py-2 rounded-xl bg-white text-violet-800 hover:border border-gray-300 ">
            <Github width={20} height={20} />
            <span>Github</span>
          </Link>
        </div>
      </motion.div>

      {/* Texte à droite */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className=" bg-violet-50 rounded-xl p-6 shadow-inner flex flex-col justify-between"
      >
        <div>
          <h2 className="text-2xl font-extrabold text-violet-900 mb-2">À propos du projet</h2>
          <p className="text-gray-700 mb-4">
            <span className="font-bold text-violet-800">Chatteo</span> est une plateforme de messagerie intelligente, simple et gratuit, propulsée par l&apos;intelligence artificielle. Elle vise à offrir une expérience de discussion moderne, intuitive et collaborative, tout en garantissant la confidentialité et la sécurité des échanges.
          </p>
          <h3 className="text-xl font-bold text-violet-800 mb-1">Mon expérience sur ce projet</h3>
          <p className="text-gray-700 mb-4">
            En tant que développeur fullstack passionné par les technologies web, j&apos;ai conçu et développé Chatteo pour répondre aux besoins actuels de communication intelligente. Ce projet m&apos;a permis de renforcer mes compétences en React, Next.js, intégration d&apos;API IA (Gemini), et design UX/UI moderne. Mon objectif : créer un outil fiable, performant et agréable à utiliser pour tous.
          </p>
        </div>
       
        <div className="text-xs text-gray-400 mt-4">© 2024 Rojo Niaina. Tous droits réservés.</div>
      </motion.div>
    </div>
  );
}
