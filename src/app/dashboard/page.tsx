"use client"

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/TopBar";
import MainPanel from "@/components/MainPanel";
import About from "@/components/About";
import Documentation from "@/components/Documentation";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isActive, setIsActive] = useState("chat")

  return (
    <div className="flex h-screen bg-gradient-to-br from-violet-50 via-white to-violet-100 flex-col sm:flex-row">
      {/* Sidebar responsive */}
      <div className="hidden sm:block">
        <Sidebar isActive={isActive} setIsActive={setIsActive} />
      </div>
      {/* Optionally, add a button to open sidebar on mobile */}
      <div className="sm:hidden flex items-center justify-between px-4 py-3 border-b border-violet-100 bg-white/80 backdrop-blur sticky top-0 z-20">
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-violet-700 focus:outline-none">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
        <span className="font-bold text-violet-700 text-lg">Chatteo</span>
      </div>
      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black/40 flex">
          <div className="w-64 bg-white h-full border-r border-violet-100 animate-slideInLeft">
            <Sidebar isActive={isActive} setIsActive={setIsActive} />
          </div>
          <div className="flex-1" onClick={() => setSidebarOpen(false)} />
        </div>
      )}
      <div className="flex flex-col flex-1 overflow-hidden min-h-0">
        <div className="sticky top-0 z-10"><Topbar /></div>
        <motion.main
          className="flex-1 p-2 sm:p-8 overflow-y-auto bg-white/80 rounded-2xl mt-2 mb-2 mx-1 sm:mx-4 border border-violet-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          { isActive === "chat" && <MainPanel />}
          { isActive === "about" && <About />}
          { isActive === "documentation" && <Documentation />}
        </motion.main>
      </div>
    </div>
  );
}
