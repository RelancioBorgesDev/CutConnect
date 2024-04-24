"use client";
import { PocketKnife, Scissors, User } from "lucide-react";
import { ArrowLeft } from "phosphor-react";
import { Dispatch, SetStateAction, useState } from "react";
import AccountType from "./account-type";
import GoBack from "@/components/go-back";

interface TypeOfAccountProps {
  isOpen: boolean;
  handleClose: () => void;
  handleAccountType: (accountType: string) => void;
}

export default function TypeOfAccount({
  isOpen,
  handleClose,
  handleAccountType,
}: TypeOfAccountProps) {
  return (
    <>
      {isOpen && (
        <main className=" flex flex-col gap-4 items-center justify-center bg-main-yellow text-zinc-950 absolute top-0 left-0 right-0 bottom-0 z-50">
          <div className=" w-full flex flex-col gap-8 items-center justify-center h-full p-6 rounded-lg relative">
            <GoBack path="/" icon={ArrowLeft} className="left-4" />
            <h1 className="text-5xl font-bold">
              Escolha o tipo de conta que deseja criar
            </h1>
            <div className="flex gap-12">
              <AccountType
                handleClose={handleClose}
                icon={PocketKnife}
                accountTypeName="Barbearia"
                handleAccountType={handleAccountType}
              />
              <AccountType
                handleClose={handleClose}
                icon={Scissors}
                accountTypeName="Barbeiro"
                handleAccountType={handleAccountType}
              />
              <AccountType
                handleClose={handleClose}
                icon={User}
                accountTypeName="Cliente"
                handleAccountType={handleAccountType}
              />
            </div>
          </div>
        </main>
      )}
    </>
  );
}
