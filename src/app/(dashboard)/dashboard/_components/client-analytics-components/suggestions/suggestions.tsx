import { Plus } from "lucide-react";
import React from "react";

export default function Suggestions() {
  return (
    <div className="border-2 border-zinc-300  rounded-lg h-full">
      <header className="flex items-center gap-2 border-b-2 px-4 py-6 font-bold uppercase text-xl text-zinc-950">
        <span className="rounded-full border-2 p-2 bg-white  ">
          <Plus className="text-zinc-950" />
        </span>
        Recomendações
      </header>
      <section className="px-4 py-2 flex gap-8 items-center w-full overflow-x-auto">
        <div className="w-60 h-60 bg-gray-200"></div>
        <div className="w-60 h-60 bg-gray-200"></div>
      </section>
    </div>
  );
}
