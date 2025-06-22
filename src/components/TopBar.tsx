"use client"
import { motion } from "framer-motion";

export default function Topbar() {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center bg-white px-8 py-5 rounded-b-2xl border-b border-violet-100"
      >
        <h1 className="text-2xl font-extrabold text-violet-700 tracking-tight">👋 Bienvenue sur Chatteo</h1>
       
      </motion.div>
    );
}
  