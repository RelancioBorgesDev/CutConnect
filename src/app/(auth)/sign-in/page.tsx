"use client";
import React from "react";
import Image from "next/image";
import login from "@/assets/login.jpg";

import { ArrowLeft, GoogleLogo } from "phosphor-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SignInForm from "./_components/sign-in-form";
import GoBack from "@/components/go-back";

export default function SignIn() {
  return (
    <main className="flex justify-between max-h-screen bg-zinc-800">
      <GoBack path={"/"} icon={ArrowLeft} className="left-2 text-main-yellow" />
      <section className="bg-login w-full relative max-lg:hidden">
        <Image src={login} alt="asa" className="h-full opacity-70" />
        <GoBack path={"/"} icon={ArrowLeft} className="left-2" />
      </section>
      <section className="overflow-y-auto w-[60%] max-lg:w-full h-screen flex flex-col items-center px-16 py-12 gap-4 ">
        <SignInForm />
      </section>
    </main>
  );
}
