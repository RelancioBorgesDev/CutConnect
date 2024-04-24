"use client";
import React from "react";
import Image from "next/image";
import login from "@/assets/login.jpg";
import logo from "@/assets/Logo.png";
import { ArrowLeft, GoogleLogo } from "phosphor-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SignIn() {
  return (
    <main className="flex justify-between max-h-screen bg-zinc-800">
      <section className="bg-login w-full relative">
        <Image src={login} alt="asa" className="h-full opacity-70" />
        <Link href={"/"} className="absolute top-2 left-2">
          <ArrowLeft className="text-main-yellow" size={54}/>
        </Link>
      </section>
      <section className="overflow-y-auto w-[60%] flex flex-col items-center px-16 py-12 gap-4">
        <form className="w-full flex flex-col items-center gap-8" action="">
          <header className=" w-full flex flex-col items-start gap-8">
            <Image src={logo} alt="logo" />
            <h1 className="text-xl font-semibold drop-shadow-lg">
              Acesse a sua conta
            </h1>
          </header>
          <div className="w-full flex flex-col gap-2 ">
            <label htmlFor="" className="font-medium">
              Email
            </label>
            <input
              className="p-4 rounded-lg bg-neutral-700 focus:border-2 focus:border-main-yellow outline-none"
              placeholder="Seu email"
              type="email"
            />
            <small className="text-sm font-extralight text-red-500 hidden">
              Errors
            </small>
          </div>

          <div className="w-full flex flex-col gap-2">
            <label className="font-medium" htmlFor="">
              Senha
            </label>
            <input
              placeholder="Sua senha"
              type="password"
              className="p-4 rounded-lg bg-neutral-700 focus:border-2 focus:border-main-yellow outline-none"
            />
            <small className="text-sm font-extralight text-red-500 hidden">
              Errors
            </small>
            <small className="text-sm text-main-yellow font-semibold">
              Esqueci minha senha
            </small>
          </div>

          <button
            className="w-full rounded-lg bg-main-yellow text-zinc-950 font-bold p-2 hover:brightness-90"
            type="submit"
          >
            Entrar
          </button>
          <div className="w-full flex items-center gap-2">
            <div className="w-full border-2 border-main-yellow h-1" />
            <span className="text-white font-bold">ou</span>
            <div className="w-full border-2 border-main-yellow h-1" />
          </div>
          <div>
            <div className="flex items-center rounded-lg bg-main-yellow p-4 text-zinc-950 font-bold gap-4">
              <span>
                <GoogleLogo size={24} />
              </span>
              <span>Entre com o Google</span>
            </div>
          </div>

          <div className="fixed bottom-0 left-0 right-0">
            <Link className="w-full" href={"/"}>
              <div className="w-full flex items-center justify-between  bg-main-yellow p-4 text-zinc-950 font-extralight gap-4">
                <span>
                  Não tem conta uma conta ?{" "}
                  <b className="font-bold text-yellow-800">
                    Se inscreva de graça
                  </b>
                </span>
                <span>
                  <ArrowRight size={24} />
                </span>
              </div>
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}
