import React from "react";
import InputContainer from "../../components/input-container";
import Label from "@/components/label";
import Input from "@/components/input";

export default function BarberShopForm() {
  return (
    <>
      <InputContainer>
        <Label htmlFor="">Nome da Barbearia</Label>
        <Input placeholder="Nome da sua barbearia" type="text" />
        <small className="text-sm font-extralight text-red-500 hidden">
          Errors
        </small>
      </InputContainer>

      <InputContainer>
        <Label htmlFor="">Email</Label>
        <Input placeholder="Email da sua barbearia" type="text" />
        <small className="text-sm font-extralight text-red-500 hidden">
          Errors
        </small>
      </InputContainer>

      <InputContainer>
        <Label htmlFor="">Senha</Label>
        <Input placeholder="Crie uma senha" type="text" />
        <small className="text-sm font-extralight text-red-500 hidden">
          Errors
        </small>
      </InputContainer>

      <InputContainer>
        <Label htmlFor="">Telefone da Barbearia</Label>
        <Input placeholder="Telefone de contato da sua barbearia" type="text" />
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
