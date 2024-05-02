"use client";
import { Search, X } from "lucide-react";
import React, { useState } from "react";

export default function HeaderSearchTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      {isOpen && (
        <span className="absolute left-0 -bottom-14 bg-zinc-800 w-full z-20">
          <input
            type="text"
            placeholder="Pesquise por uma barbearia ou barbeiro"
            className="outline-none bg-transparent border-0 p-4 w-full text-main-yellow"
          />
        </span>
      )}
      <span onClick={handleIsOpen} className="cursor-pointer">
        {isOpen ? (
          <>
            <X className="text-main-yellow" size={34} />
          </>
        ) : (
          <>
            <Search className="text-main-yellow" size={34} />
          </>
        )}
      </span>
    </>
  );
}
