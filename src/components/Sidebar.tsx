"use client"

import { MessageSquare, InfoIcon, FileEdit } from "lucide-react";
import ImageLogo from "next/image";
import LogoViolet from '@/assets/images/violet.png'

export default function Sidebar({ isActive, setIsActive }: { isActive: string, setIsActive: (tab: string) => void }) {
  return (
    <aside className="w-64 bg-gradient-to-b from-gray-100 via-violet-50 to-white text-gray-800 flex flex-col py-8 px-2 min-h-screen border-r border-violet-100">
      <div className="flex items-center justify-center gap-2 text-2xl font-extrabold mb-10">
        <span className="rounded-full">
          <ImageLogo src={LogoViolet} alt="Logo" className="rounded-full" width={72} height={72} />
        </span>
      </div>
      <nav className="space-y-2 flex-1">
        <NavItem icon={<MessageSquare size={18} />} label="AI Chat" active="chat" isActive={isActive} setIsActive={setIsActive} />
        <NavItem icon={<InfoIcon size={18} />} label="A propos" active="about" isActive={isActive} setIsActive={setIsActive} />
        <NavItem icon={<FileEdit size={18} />} label="Documentation sur l'API" active="documentation" isActive={isActive} setIsActive={setIsActive} />
      </nav>
      {/* Developer Info Section */}
      <div className="mt-10 pt-6 border-t border-violet-100 text-xs text-gray-500 flex flex-col items-center gap-1">
        <span className="font-semibold text-violet-700">Développé par</span>
        <span className="font-medium text-gray-700">Rojo Niaina</span>
        <span className="text-gray-400">exemple.email@email.com</span>
        <span className="text-gray-400">© 2024</span>
      </div>
    </aside>
  );
}

function NavItem({ icon, label, active, isActive, setIsActive }: { icon: React.ReactNode; label: string; active: string; isActive: string; setIsActive: (tab: string) => void }) {
  const isSelected = isActive === active;
  return (
    <button
      onClick={() => setIsActive(active)}
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 font-medium text-gray-600 hover:text-violet-800 hover:bg-violet-100 ${isSelected ? 'bg-violet-200 text-violet-900 font-bold' : ''}`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
