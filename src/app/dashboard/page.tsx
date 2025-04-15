import Sidebar from "@/components/Sidebar";
import { Bell, Users } from "lucide-react";
import React from "react";

export default function Dashboardpage() {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <div className="ml-64  flex-1 px-5 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center  mb-6">
            <h1 className="text-3xl font-bold  text-[#1998D3]">
              Bienvenu ! Docteur
            </h1>
            <div className="flex items-center gap-4">
              <Bell size={25} />
              <a href="/mon-compte">
              <img
                src="/user.jpeg"
                alt="Logo"
                className="w-10 h-10 object-cover rounded-full"
              /></a>
              
            </div>
          </div>
          <p className="text-gray-700 mb-5">Welcome to your dashboard!</p>
          <h1 className="py-10 text-5xl ">Rendez-vous</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-[#1998D3] rounded-lg shadow-md p-5">
              <div className="flex items-center justify-center text-lg ">
                <div className="bg-white rounded-xl font-bold  w-12 h-10 flex items-center justify-center mb-4">
                  98
                </div>
                <a
                  href="/mes-rendezvous"
                  className="bg-white cursor-pointer rounded-xl font-bold  w-8 h-8 flex items-center justify-center mb-4"
                >
                  <img
                    src="/logo.png"
                    alt="logo"
                    className="w-8 h-8 object-cover rounded-full"
                  />
                </a>
              </div>
              <h2 className="px-23 text-lg items-center justify-center  font-semibold text-white">
                Listes des Rendez-vous
              </h2>
            </div>

            {/* Card 2 */}
            <div className="bg-green-700 rounded-lg shadow-md p-5">
              <div className="flex items-center justify-center text-lg ">
                <div className="bg-white rounded-xl font-bold  w-12 h-10 flex items-center justify-center mb-4">
                  62
                </div>
                <a
                  href="/mes-patients"
                  className="bg-white cursor-pointer rounded-xl font-bold  w-8 h-8 flex items-center justify-center mb-4"
                >
                  <Users size={25} className="text-green-700" />
                </a>
              </div>
              <h2 className="px-23 text-lg items-center justify-center  font-semibold text-white">
                Listes des Patients
              </h2>
            </div>

            {/* Card 3 */}
            <div className="bg-black rounded-lg shadow-md p-5">
              <div className="flex items-center justify-center text-lg ">
                <div className="bg-white rounded-xl font-bold  w-12 h-10 flex items-center justify-center mb-4">
                  98
                </div>
                <a
                  href="/mes-rendezvous"
                  className="bg-white cursor-pointer rounded-xl font-bold  w-8 h-8 flex items-center justify-center mb-4"
                >
                  <img
                    src="/logo.png"
                    alt="logo"
                    className="w-8 h-8 object-cover rounded-full"
                  />
                </a>
              </div>
              <h2 className="px-23 text-lg items-center justify-center  font-semibold text-white">
                Listes des Rendez-vous
              </h2>
            </div>

            {/* Card 4 */}
            <div className="bg-[#8EDBFF] rounded-lg shadow-md p-5">
              <div className="flex items-center justify-center text-lg ">
                <div className="bg-white rounded-xl font-bold  w-12 h-10 flex items-center justify-center mb-4">
                  62
                </div>
                <a
                  href="/mes-patients"
                  className="bg-white cursor-pointer rounded-xl font-bold  w-8 h-8 flex items-center justify-center mb-4"
                >
                  <Users size={25} className="text-green-700" />
                </a>
              </div>
              <h2 className="px-23 text-lg items-center justify-center  font-semibold text-white">
              Listes des Patients
              </h2>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
