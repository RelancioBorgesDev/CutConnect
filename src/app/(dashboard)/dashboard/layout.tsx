import {
  Calendar,
  History,
  Home,
  Palette,
  PocketKnife,
  Scissors,
  Search,
  User,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/Logo.png";
import DashboardHamburguerNav from "./_components/dashboard-hamburguer-nav/dashboard-hamburguer-nav";
import HeaderSearchTrigger from "./_components/header-search-trigger/header-search-trigger";

export const metadata: Metadata = {
  title: "CutConnect | Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-white h-screen">
      <header className="flex items-center justify-between bg-zinc-700 px-4 py-5 relative">
        <Image src={Logo} alt="logo" width={200} height={200} />
        <div className="rounded-lg bg-zinc-600 flex justify-between items-center border-0 w-1/2 relative max-lg:hidden">
          <input
            type="text"
            placeholder="Pesquise por uma barbearia ou barbeiro"
            className="outline-none bg-transparent border-0 p-4 w-full text-main-yellow"
          />
          <Search className="absolute right-2 text-main-yellow" />
        </div>
        <div className="flex items-center gap-4 max-lg:hidden">
          <Palette size={34} />
          <User size={34} />
        </div>
        <div className="hidden max-lg:flex items-center gap-6">
          <HeaderSearchTrigger />
          <DashboardHamburguerNav />
        </div>
      </header>
      <nav className="flex items-center justify-center  bg-zinc-600 py-5 shadow-xl max-lg:hidden">
        <ul className="max-w-7xl w-full flex justify-center gap-24">
          <Link href={"/"}>
            <li className="flex items-center gap-4 text-zinc-100">
              <Home />
              <span>Inicio</span>
            </li>
          </Link>
          <Link href={"/"}>
            <li className="flex items-center gap-4 text-zinc-100">
              <Scissors />
              <span>Barbeiros</span>
            </li>
          </Link>
          <Link href={"/"}>
            <li className="flex items-center gap-4 text-zinc-100">
              <PocketKnife />
              <span>Barbearias</span>
            </li>
          </Link>
          <Link href={"/"}>
            <li className="flex items-center gap-4 text-zinc-100">
              <History />
              <span>Histórico</span>
            </li>
          </Link>
          <Link href={"/"}>
            <li className="flex items-center gap-4 text-zinc-100">
              <Calendar />
              <span>Agendamentos</span>
            </li>
          </Link>
        </ul>
      </nav>

      <section>{children}</section>
    </main>
  );
}
