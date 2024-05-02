"use client";
import { Calendar, History, Home, Menu, PocketKnife, X } from "lucide-react";
import Link from "next/link";
import { Scissors } from "phosphor-react";
import React, { useState } from "react";

export default function DashboardHamburguerNav() {
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <span onClick={handleIsOpen} className="cursor-pointer">
        <Menu className="text-main-yellow" size={34} />
      </span>

      {isOpen && (
        <div className="w-1/2 h-screen bg-zinc-700 absolute top-0 right-0 z-10 shadow-xl">
          <div className="w-full h-full relative">
            <span
              onClick={handleIsOpen}
              className="cursor-pointer absolute right-4 top-8"
            >
              <X className="text-main-yellow" size={34} />
            </span>
            <nav>
              <ul className="flex flex-col gap-4 py-20">
                <li className="w-full hover:bg-yellow-400 hover:text-zinc-800 cursor-pointer transition-all ease-in-out duration-500 text-white">
                  Profile
                </li>
                <Link href={"/"}>
                  <li className="w-full hover:bg-yellow-400 hover:text-zinc-800 cursor-pointer transition-all ease-in-out duration-500 flex items-center gap-4 text-zinc-100 px-4 py-6">
                    <Home />
                    <span>Inicio</span>
                  </li>
                </Link>
                <Link href={"/"}>
                  <li className="w-full hover:bg-yellow-400 hover:text-zinc-800 cursor-pointer transition-all ease-in-out duration-500 flex items-center gap-4 text-zinc-100 px-4 py-6">
                    <Scissors />
                    <span>Barbeiros</span>
                  </li>
                </Link>
                <Link href={"/"}>
                  <li className="w-full hover:bg-yellow-400 hover:text-zinc-800 cursor-pointer transition-all ease-in-out duration-500 flex items-center gap-4 text-zinc-100 px-4 py-6">
                    <PocketKnife />
                    <span>Barbearias</span>
                  </li>
                </Link>
                <Link href={"/"}>
                  <li className="w-full hover:bg-yellow-400 hover:text-zinc-800 cursor-pointer transition-all ease-in-out duration-500 flex items-center gap-4 text-zinc-100 px-4 py-6">
                    <History />
                    <span>Histórico</span>
                  </li>
                </Link>
                <Link href={"/"}>
                  <li className="w-full hover:bg-yellow-400 hover:text-zinc-800 cursor-pointer transition-all ease-in-out duration-500 flex items-center gap-4 text-zinc-100 px-4 py-6">
                    <Calendar />
                    <span>Agendamentos</span>
                  </li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
