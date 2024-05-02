import { DollarSign, MoveUpRight } from "lucide-react";
import React, { ElementType } from "react";

interface FinanceContainerProps {
  amount: string | number;
  title: string;
  icon: ElementType;
  description: string;
}

export default function FinanceContainer({
  icon: Icon,
  title,
  amount,
  description,
}: FinanceContainerProps) {
  return (
    <div className="w-full bg-white rounded-lg border border-gray-300 p-6">
      <div className="flex items-center mb-4">
        <span className="bg-gray-200 rounded-full p-3 mr-4">
          <DollarSign />
        </span>
        <div>
          <p className="text-3xl font-bold text-gray-800">R$ 200,00</p>
          <p className="text-gray-500">Recebidos</p>
        </div>
      </div>
      <div className="flex items-center">
        <span className="bg-green-100 rounded-full p-3 mr-4">
          <Icon className="text-green-500" />
        </span>
        <p className="text-gray-800">35% a mais do que no mês passado</p>
      </div>
    </div>
  );
}
