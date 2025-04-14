import Sidebar from "@/components/Sidebar";
import { Bell } from "lucide-react";
import React from "react";

export default function Dashboardpage() {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <div className="ml-64  flex-1 px-5 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center  mb-6">
            <h1 className="text-3xl font-bold  text-[#1998D3]">Bienvenu ! Docteur</h1>
            <div className="flex items-center gap-4">
            <Bell size={25}/>
              <img
                src="/user.jpeg"
                alt="Logo"
                className="w-10 h-10 object-cover rounded-full"
              />
            </div>
          </div>
          <p className="text-gray-700 mb-10">Welcome to your dashboard!</p>
          <h1 className="py-10 text-5xl ">Rendez-vous</h1>
          </div>
      </div>

    </main>
  );
}
