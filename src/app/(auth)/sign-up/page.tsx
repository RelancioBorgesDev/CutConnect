"use client";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

import login from "@/assets/login.jpg";
import GoBack from "@/components/go-back";

import TypeOfAccount from "./_components/type-of-account";
import SignUpForm from "./_components/sign-up-form";

export default function SignUp() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedAccountType, setSelectedAccountType] = useState<string>("");

  const handleClose = (): void => {
    setIsOpen(false);
  };

  const handleAccountType = (accountType: string): void => {
    setSelectedAccountType(accountType);
  };

  return (
    <main className="flex justify-between max-h-screen bg-zinc-800 relative">
      <TypeOfAccount
        isOpen={isOpen}
        handleClose={handleClose}
        handleAccountType={handleAccountType}
      />
      <section className="bg-login w-full relative">
        <Image src={login} alt="asa" className="h-full opacity-70" />
        <GoBack path="/" icon={ArrowLeft} className="left-4 text-yellow-950" />
      </section>
      <section className="overflow-y-auto w-[60%] flex flex-col items-center px-16 py-12 gap-4">
        <SignUpForm selectedAccountType={selectedAccountType} />
      </section>
    </main>
  );
}
