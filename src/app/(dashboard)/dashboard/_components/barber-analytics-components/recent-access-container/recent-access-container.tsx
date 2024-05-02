"use client";
import { Chart, registerables } from "chart.js";
import { LineChart } from "lucide-react";
import React from "react";
import { Line } from "react-chartjs-2";

export default function RecentAccessContainer() {
  Chart.register(...registerables);
  const data = {
    labels: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Out",
      "Nov",
      "Dez",
    ],
    datasets: [
      {
        label: "Acessos Por Mês",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(214, 218, 28)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full bg-white rounded-lg border border-gray-300  col-span-1 row-span-1">
      <header className="flex items-center justify-between gap-2 border-b-2 px-4 py-3  text-zinc-950 font-bold uppercase">
        <div className="flex items-center gap-2">
          <span className="rounded-full border-2 p-2 bg-white">
            <LineChart />
          </span>
          <span>Acessos recentes no perfil</span>
        </div>
        <div></div>
      </header>
      <section className="p-4 w-full">
        <Line data={data} options={options} className="w-full" />
      </section>
    </div>
  );
}
