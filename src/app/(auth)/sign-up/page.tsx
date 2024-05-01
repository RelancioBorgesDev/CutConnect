"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

import login from "@/assets/login.jpg";
import GoBack from "@/components/go-back";

import TypeOfAccount from "./_components/type-of-account";
import SignUpForm from "./_components/sign-up-form";
import Link from "next/link";

export default function SignUp() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedAccountType, setSelectedAccountType] = useState<string>("");

  const handleClose = (): void => {
    setIsOpen(false);
  };

  const handleOpen = (): void => {
    setIsOpen(true);
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
      <span className="hidden max-lg:block">
        <GoBack
          path="/"
          icon={ArrowLeft}
          className="left-4 text-main-yellow "
        />
      </span>
      <section className="bg-login w-full relative max-lg:hidden">
        <Image src={login} alt="asa" className="h-full opacity-70" />
        <GoBack path="/" icon={ArrowLeft} className="left-4 text-main-yellow" />
      </section>
      <section className="overflow-y-auto w-[60%] flex flex-col items-center px-16 py-12 gap-4 max-lg:w-full">
        <SignUpForm
          selectedAccountType={selectedAccountType}
          handleOpen={handleOpen}
        />
        <div className="fixed bottom-0 left-0 right-0 ">
          <Link className="w-full" href={"/sign-in"}>
            <div className="w-full flex flex-row-reverse items-center justify-between  bg-main-yellow p-4 text-zinc-950 font-extralight gap-4">
              <span>
                Já possui conta ?{" "}
                <b className="font-bold text-yellow-800">Faça login</b>
              </span>
              <span>
                <ArrowLeft size={24} />
              </span>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
