"use client";

import { PocketKnife, Scissors, User } from "lucide-react";
import { ArrowLeft } from "phosphor-react";
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <main className="bg-main-yellow text-zinc-950  rounded-lg p-6">
            <div className="relative flex flex-col items-center">
              <h1 className="text-4xl font-bold text-center mb-8">
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
        </div>
      )}
    </>
  );
}
