"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import logoChatteo from "@/assets/images/logoChatteo.png"
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-violet-100 via-white to-violet-50 font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="bg-white/90 backdrop-blur-2xl rounded-3xl p-14 flex flex-col items-center max-w-2xl w-full border border-violet-100"
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          className="flex items-center gap-2 mb-8"
        >
          <Image src={logoChatteo} alt="Chatteo Logo" width={100} height={100} />
          <h1 className="text-6xl font-black text-violet-900 tracking-tight font-sans">chatteo</h1>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-5 text-center leading-tight"
        >
          La messagerie intelligente, simple et sécurisée
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: 'easeOut' }}
          className="text-gray-600 text-center mb-10 max-w-lg text-lg md:text-xl font-medium"
        >
          Bienvenue sur <span className="font-bold text-violet-900">chatteo</span>, la plateforme de discussion propulsée par l&apos;intelligence artificielle. Collaborez, innovez et échangez en toute confiance grâce à une expérience moderne et intuitive.
        </motion.p>
        <motion.a
          href="/dashboard"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
          className="px-10 flex items-center space-x-3 py-4 bg-gradient-to-r from-violet-800 via-violet-700 to-violet-800 hover:from-violet-900 hover:to-violet-900 text-white font-bold rounded-full transition text-xl focus:outline-none focus:ring-4 focus:ring-violet-200"
        >
          <span className="tracking-wide">Commencer</span>
          <ArrowRight width={26} height={26} color="white"/>
        </motion.a>
      </motion.div>
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7, ease: 'easeOut' }}
        className="mt-12 text-gray-500 text-base font-medium"
      >
        © {new Date().getFullYear()} chatteo. Tous droits réservés.
      </motion.footer>
    </div>
  );
}
