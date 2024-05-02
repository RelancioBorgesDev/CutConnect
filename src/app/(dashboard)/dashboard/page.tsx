import { Calendar, MoveUpRight } from "lucide-react";
import FinanceContainer from "./_components/barber-analytics-components/finance-container/finance-container";
import RecentAccessContainer from "./_components/barber-analytics-components/recent-access-container/recent-access-container";
import ScheduledContainer from "./_components/barber-analytics-components/scheduled-container/scheduled-container";

export default function Dashboard() {
  return (
    <main className="grid grid-cols-2 grid-rows-2 gap-8 px-4 py-8 h-[100vh-160px] max-lg:flex max-lg:flex-col bg-white">
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
      <ScheduledContainer />
    </main>
  );
}
