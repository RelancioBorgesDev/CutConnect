"use client";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function HamburguerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  function handleOpenMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="hidden max-lg:block">
      <span
        className="text-main-yellow cursor-pointer"
        onClick={handleOpenMenu}
      >
        <Menu size={44} />
      </span>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className="bg-main-yellow w-full  absolute top-0 right-0 bottom-0 z-50 flex flex-col items-center justify-center"
      >
        <motion.span
          className="text-zinc-950 absolute top-8 right-8 cursor-pointer"
          onClick={handleOpenMenu}
          whileTap={{ rotate: 180 }}
        >
          <X size={44} />
        </motion.span>
        <motion.ul
          className="flex flex-col items-center gap-8 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <li className="text-zinc-950 text-xl drop-shadow-xl">Sobre</li>
          <li className="text-zinc-950 text-xl drop-shadow-xl">Barbearias</li>
          <li className="text-zinc-950 text-xl drop-shadow-xl">Barbeiros</li>
          <li className="text-zinc-950 text-xl drop-shadow-xl">Empregos</li>
        </motion.ul>
        <Link href={"/sign-in"}>
          <motion.button
            className="bg-zinc-950 text-main-yellow px-4 py-2 font-bold rounded-lg text-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Entrar
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
