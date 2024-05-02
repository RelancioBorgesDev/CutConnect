import {
  Calendar,
  DollarSign,
  LineChart,
  MoveDownLeft,
  MoveUpRight,
  Plus,
  Store,
} from "lucide-react";
import FinanceContainer from "./_components/barber-analytics-components/finance-container/finance-container";
import RecentAccessContainer from "./_components/barber-analytics-components/recent-access-container/recent-access-container";
import ScheduledContainer from "./_components/barber-analytics-components/scheduled-container/scheduled-container";

export default function Dashboard() {
  return (
    <main className="grid grid-cols-2 grid-rows-2 gap-8 px-4 py-8 h-[100vh-160px] max-lg:flex max-lg:flex-col bg-white">
      {/* Welcome div */}
      <div className="w-full flex flex-col flex-wrap gap-8 ">
        <h1 className="text-zinc-950 text-4xl font-bold drop-shadow-xl">
          Seja Bem Vindo, Usuario
        </h1>
        <section className="overflow-hidden grid grid-cols-2 h-fit gap-4 text-zinc-950">
          <FinanceContainer
            title="Recebidos"
            description="35% a mais do que no mês passado"
            amount={"200,00"}
            icon={MoveUpRight}
          />
          <FinanceContainer
            title="Recebidos"
            description="35% a mais do que no mês passado"
            amount={"200,00"}
            icon={MoveUpRight}
          />
          <FinanceContainer
            title="Recebidos"
            description="35% a mais do que no mês passado"
            amount={"200,00"}
            icon={MoveUpRight}
          />
          <FinanceContainer
            title="Pagamentos Agendados"
            description="10 clientes agendados"
            amount={"50,00"}
            icon={Calendar}
          />
        </section>
      </div>

      <RecentAccessContainer />
      {/* CutConnect recommendations */}
      {/*   <div className="border-2 border-zinc-300  rounded-lg h-full">
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
      </div> */}

      {/* Schedule Cuts */}
      <ScheduledContainer />
    </main>
  );
}
