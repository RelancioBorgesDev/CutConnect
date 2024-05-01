"use client";
import React from "react";
import FormContainer from "../../components/form-container";
import HeaderContainer from "../../components/header-container";
import Image from "next/image";
import { GoogleLogo } from "phosphor-react";
import logo from "@/assets/Logo.png";
import UserForm from "./user-form";
import { PocketKnife, Scissors, User } from "lucide-react";
import BarberShopForm from "./barber-shop-form";
import BarberForm from "./barber-form";

interface SignUpFormProps {
  selectedAccountType: string;
  handleOpen: () => void;
}

export default function SignUpForm({
  selectedAccountType,
  handleOpen,
}: SignUpFormProps) {
  const renderIcon = () => {
    switch (selectedAccountType) {
      case "Cliente":
        return <User size={44} />;
      case "Barbearia":
        return <PocketKnife size={44} />;
      case "Barbeiro":
        return <Scissors size={44} />;
    }
  };

  const renderForm = () => {
    switch (selectedAccountType) {
      case "Cliente":
        return <UserForm />;
      case "Barbearia":
        return <BarberShopForm />;
      case "Barbeiro":
        return <BarberForm />;
    }
  };
  return (
    <FormContainer>
      <HeaderContainer>
        <Image src={logo} alt="logo" />
        <div
          className="w-fit flex  items-center rounded-xl bg-main-yellow p-2 text-zinc-950 font-bold gap-4  cursor-pointer border-2 border-main-yellow hover:border-yellow-800"
          onClick={handleOpen}
        >
          {renderIcon()}
          <span>Conta {selectedAccountType}</span>
        </div>
        <h1 className="text-xl font-semibold drop-shadow-lg">
          Cadastre-se de graça
        </h1>
      </HeaderContainer>

      {renderForm()}

      <button
        className="w-full rounded-lg bg-main-yellow text-zinc-950 font-bold p-2 hover:brightness-90"
        type="submit"
      >
        Cadastrar
      </button>
      <div className="w-full flex items-center gap-2">
        <div className="w-full border-2 border-main-yellow h-1" />
        <span className="text-white font-bold">ou</span>
        <div className="w-full border-2 border-main-yellow h-1" />
      </div>
      <div className="w-full flex flex-col items-center gap-4">
        <div className="w-fit flex items-center rounded-lg bg-main-yellow p-4 text-zinc-950 font-bold gap-4 pb-4">
          <span>
            <GoogleLogo size={24} />
          </span>
          <span>Entre com o Google</span>
        </div>
      </div>
    </FormContainer>
  );
}
