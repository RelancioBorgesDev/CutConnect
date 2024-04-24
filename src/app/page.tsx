import Image from "next/image";
import logo from "@/assets/Logo.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen bg-intro opacity-95">
      <header className="flex justify-between items-center py-4 px-8">
        <Image src={logo} alt="Logo" />
        <nav>
          <ul className="flex items-center gap-8">
            <li className="text-main-yellow text-xl drop-shadow-xl">Sobre</li>
            <li className="text-main-yellow text-xl drop-shadow-xl">
              Barbearias
            </li>
            <li className="text-main-yellow text-xl drop-shadow-xl">
              Barbeiros
            </li>
            <li className="text-main-yellow text-xl drop-shadow-xl">
              Empregos
            </li>
          </ul>
        </nav>
        <Link href={"/sign-in"}>
          <button className="bg-main-yellow px-4 py-2 text-zinc-950 font-bold rounded-sm text-xl">
            Entrar
          </button>
        </Link>
      </header>
      <section className="w-[800px] text-main-yellow h-[calc(100vh-112px)] flex flex-col justify-center  text-start gap-8 px-16">
        <h1 className="text-7xl font-bold drop-shadow-2xl">
          A sua nova experiência de estilo
        </h1>
        <h4 className="text-xl font-semibold">
          Entre no mundo da beleza masculina, onde cada corte é uma obra-prima,
          cada cliente é uma prioridade e cada barbearia é uma comunidade.
          Bem-vindo à sua nova experiência de estilo. Bem-vindo à nossa família
          de barbearias.
        </h4>
        <Link href={"/sign-up"}>
          <button className="bg-main-yellow px-4 py-2 text-zinc-950 font-bold rounded-lg text-xl">
            Crie sua conta já !
          </button>
        </Link>
      </section>
    </main>
  );
}
