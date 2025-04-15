// import React from 'react'

import {
  CalendarCheck,
  Home,
  LayoutDashboard,
  LogOut,
  User,
  Users,
} from "lucide-react";

export default function Sidebar() {
  return (
    <>
      {/* <aside className="w-64 h-screen bg-[#1998D3] text-white flex flex-col p-6 shadow-lg"> */}
      <aside className="fixed top-0 left-0 w-70 h-screen bg-[#8EDBFF] text-white flex flex-col p-6 shadow-lg z-50">
        {/* <div className="ml-7 flex items-center justify-center w-35 h-15 bg-white rounded-xs mb-6">
    <img src="/logo.png" alt="Logo" className="w-25 h-25 object-contain" />
  </div> */}

        <a
          href="/"
          className="flex items-center justify-center w-32 h-16 bg-white rounded-md mb-6  ml-7 cursor-pointer"
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="w-24 h-24 object-cover"
          />
        </a>

        <a href="/dashboard" className="flex cursor-pointer items-center justify-center gap-2 bg-white text-xl text-[#1998D3] font-bold py-2 rounded-lg mb-6">
          <LayoutDashboard size={28} className="text-[#1998D3]" />
          <span>Tableau de bord</span>
        </a>

        {/* <div className="flex items-center justify-center mb-4">
    <img src="/user.jpeg" alt="user" className="w-25 h-25 rounded-full" />
  </div> */}
        <div className="flex justify-center mb-4">
          <img
            src="/user.jpeg"
            alt="user"
            className="w-20 h-20 rounded-full object-cover border-1 border-white"
          />
        </div>

        <nav className="flex flex-col  gap-4">
          <a
            href="/"
            className="hover:bg-white/10 px-3 py-2 font-bold text-lg rounded transition flex items-center gap-3"
          >
            <Home size={25} className="text-[#1998D3]" /> Accueil
          </a>
          <a
            href="/mes-rendezvous"
            className="hover:bg-white/10 px-3 py-2 font-bold text-lg rounded transition flex items-center gap-3"
          >
            <CalendarCheck size={25} className="text-[#1998D3]" /> Mes
            rendez-vous
          </a>
          <a
            href="/mon-compte"
            className="hover:bg-white/10 px-3 py-2 font-bold text-lg rounded transition flex items-center gap-3"
          >
            <User size={25} className="text-[#1998D3]" /> Mon compte
          </a>
          <a
            href="/mes-patients"
            className="hover:bg-white/10 px-3 py-2 font-bold text-lg rounded transition flex items-center gap-3"
          >
            <Users size={25} className="text-[#1998D3]" /> Mes Patients
          </a>
        </nav>

        <div className="mt-auto">
          <button className="hover:bg-white/10 px-4 py-2 rounded items-center text-2xl font-bold flex gap-3">
            <LogOut size={25} className="text-[#1998D3]"/> Déconnexion
          </button>
        </div>
      </aside>
    </>
  );
}
