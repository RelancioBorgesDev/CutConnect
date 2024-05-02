import { Calendar } from "lucide-react";
import React from "react";

export default function ScheduledContainer() {
  return (
    <div className="h-fit border-2 border-zinc-300 rounded-lg col-span-2 row-span-2 overflow-hidden max-lg:row-span-1">
      <header className="flex items-center justify-between gap-2 border-b-2 px-4 py-3 text-zinc-950 font-bold uppercase">
        <div className="flex items-center gap-2">
          <span className="rounded-full border-2 p-2 bg-white">
            <Calendar className="text-zinc-950" />
          </span>
          <span>Clientes Agendados</span>
        </div>
        <div></div>
      </header>
      <section className="h-full overflow-y-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Nome
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Telefone
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Tipo de Corte
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Horário Agendado
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-zinc-950">
            {/* Sample data */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
              <td className="px-6 py-4 whitespace-nowrap">123-456-7890</td>
              <td className="px-6 py-4 whitespace-nowrap">Corte Masculino</td>
              <td className="px-6 py-4 whitespace-nowrap">10:00 AM</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Jane Smith</td>
              <td className="px-6 py-4 whitespace-nowrap">987-654-3210</td>
              <td className="px-6 py-4 whitespace-nowrap">Corte Feminino</td>
              <td className="px-6 py-4 whitespace-nowrap">11:30 AM</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Jane Smith</td>
              <td className="px-6 py-4 whitespace-nowrap">987-654-3210</td>
              <td className="px-6 py-4 whitespace-nowrap">Corte Feminino</td>
              <td className="px-6 py-4 whitespace-nowrap">11:30 AM</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Jane Smith</td>
              <td className="px-6 py-4 whitespace-nowrap">987-654-3210</td>
              <td className="px-6 py-4 whitespace-nowrap">Corte Feminino</td>
              <td className="px-6 py-4 whitespace-nowrap">11:30 AM</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Jane Smith</td>
              <td className="px-6 py-4 whitespace-nowrap">987-654-3210</td>
              <td className="px-6 py-4 whitespace-nowrap">Corte Feminino</td>
              <td className="px-6 py-4 whitespace-nowrap">11:30 AM</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Jane Smith</td>
              <td className="px-6 py-4 whitespace-nowrap">987-654-3210</td>
              <td className="px-6 py-4 whitespace-nowrap">Corte Feminino</td>
              <td className="px-6 py-4 whitespace-nowrap">11:30 AM</td>
            </tr>

            {/* Add more rows as needed */}
          </tbody>
        </table>
      </section>
    </div>
  );
}
