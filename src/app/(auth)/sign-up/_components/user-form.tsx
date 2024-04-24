import React from "react";
import InputContainer from "../../components/input-container";
import Label from "@/components/label";
import Input from "@/components/input";

export default function UserForm() {
  return (
    <>
      <InputContainer>
        <Label htmlFor="">Nome Completo</Label>
        <Input placeholder="Seu nome" type="text" />
        <small className="text-sm font-extralight text-red-500 hidden">
          Errors
        </small>
      </InputContainer>

      <InputContainer>
        <Label htmlFor="">Email</Label>
        <Input placeholder="Seu email" type="text" />
        <small className="text-sm font-extralight text-red-500 hidden">
          Errors
        </small>
      </InputContainer>

      <InputContainer>
        <Label htmlFor="">Senha</Label>
        <Input placeholder="Sua senha" type="text" />
        <small className="text-sm font-extralight text-red-500 hidden">
          Errors
        </small>
      </InputContainer>

      <InputContainer>
        <Label htmlFor="">Endereço</Label>
        <Input placeholder="Bairro" type="text" />
        <small className="text-sm font-extralight text-red-500 hidden">
          Errors
        </small>
        <Input placeholder="Rua" type="text" />
        <small className="text-sm font-extralight text-red-500 hidden">
          Errors
        </small>
        <Input placeholder="Número" type="number" />
        <small className="text-sm font-extralight text-red-500 hidden">
          Errors
        </small>
        <Input placeholder="Estado" type="text" />
        <small className="text-sm font-extralight text-red-500 hidden">
          Errors
        </small>
        <Input placeholder="Cidade" type="text" />
        <small className="text-sm font-extralight text-red-500 hidden">
          Errors
        </small>
      </InputContainer>
    </>
  );
}
