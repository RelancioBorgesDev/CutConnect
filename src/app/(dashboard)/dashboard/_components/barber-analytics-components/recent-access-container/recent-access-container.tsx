import { LineChart } from "lucide-react";
import React from "react";

export default function RecentAccessContainer() {
  return (
    <div className="w-full bg-white rounded-lg border border-gray-300  col-span-1 row-span-1">
      <header className="flex items-center justify-between gap-2 border-b-2 px-4 py-3  text-zinc-950 font-bold uppercase">
        <div className="flex items-center gap-2">
          <span className="rounded-full border-2 p-2 bg-white">
            <LineChart className="text-zinc-950" />
          </span>
          <span>Acessos recentes no perfil</span>
        </div>
        <div></div>
      </header>
      <section></section>
    </div>
  );
}
