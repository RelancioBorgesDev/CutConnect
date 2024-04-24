import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GoogleLogo } from "phosphor-react";
import logo from "@/assets/Logo.png";
import HeaderContainer from "../../components/header-container";
import FormContainer from "../../components/form-container";
import InputContainer from "../../components/input-container";
import Label from "@/components/label";
import Input from "@/components/input";

export default function SignInForm() {
  return (
    <FormContainer>
      <HeaderContainer>
        <Image src={logo} alt="logo" />
        <h1 className="text-xl font-semibold drop-shadow-lg">
          Acesse a sua conta
        </h1>
      </HeaderContainer>
      <InputContainer>
        <Label htmlFor="">Email</Label>
        <Input placeholder="Seu email" type="email" />
        <small className="text-sm font-extralight text-red-500 hidden">
          Errors
        </small>
      </InputContainer>

      <InputContainer>
        <Label htmlFor="">Senha</Label>
        <Input placeholder="Sua senha" type="password" />
        <small className="text-sm font-extralight text-red-500 hidden">
          Errors
        </small>
        <small className="text-sm text-main-yellow font-semibold">
          Esqueci minha senha
        </small>
      </InputContainer>

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
        <Link className="w-full" href={"/sign-up"}>
          <div className="w-full flex items-center justify-between  bg-main-yellow p-4 text-zinc-950 font-extralight gap-4">
            <span>
              Não tem conta uma conta ?{" "}
              <b className="font-bold text-yellow-800">Se inscreva de graça</b>
            </span>
            <span>
              <ArrowRight size={24} />
            </span>
          </div>
        </Link>
      </div>
    </FormContainer>
  );
}
