"use client"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import logoChatteo from "@/assets/images/logoChatteo.png"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-violet-100 via-white to-violet-50 font-sans px-3">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-white/90 backdrop-blur-2xl rounded-xl p-10 md:p-12 flex flex-col items-center max-w-2xl w-full border border-gray-200"
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="flex items-center  mb-8"
        >
          {/* Replace the placeholder URL with your actual image blob URL */}
          <Image src={logoChatteo} alt="Chatteo Logo" width={100} height={100} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-violet-900 tracking-tight font-sans">Chatteo</h1>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center leading-tight"
        >
          La messagerie intelligente, simple et gratuit
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
          className="text-gray-600 text-center mb-8 max-w-lg text-base md:text-lg font-medium"
        >
          Bienvenue sur <span className="font-bold text-violet-900">chatteo</span>, la plateforme de discussion
          propulsée par l&apos;intelligence artificielle. Collaborez, innovez et échangez en toute confiance grâce à une
          expérience moderne et intuitive.
        </motion.p>
        <motion.a
          href="/dashboard"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3 flex items-center gap-2 bg-violet-700 hover:bg-violet-800 text-white font-semibold rounded-lg transition text-lg focus:outline-none focus:ring-4 focus:ring-violet-200"
        >
          <span className="tracking-wide">Commencer</span>
          <ArrowRight width={20} height={20} color="white" />
        </motion.a>
      </motion.div>
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
        className="mt-12 text-gray-500 text-sm font-medium"
      >
        © {new Date().getFullYear()} chatteo. Tous droits réservés.
      </motion.footer>
    </div>
  )
}
