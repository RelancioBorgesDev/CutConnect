import { ElementType } from "react";

interface AccountTypeProps {
  handleClose: () => void;
  handleAccountType: (accountType: string) => void;
  icon: ElementType;
  accountTypeName: string;
}
export default function AccountType({
  handleClose,
  handleAccountType,
  icon: Icon,
  accountTypeName,
}: AccountTypeProps) {
  const handleClick = (accountType: string) => {
    handleClose();
    handleAccountType(accountTypeName);
  };
  return (
    <div
      className="flex flex-col items-center gap-4 border-2 border-zinc-950 p-8 rounded-lg hover:bg-yellow-950 hover:cursor-pointer hover:text-yellow-500 transition-all ease-in-out duration-500"
      onClick={() => handleClick(accountTypeName)}
    >
      <Icon size={68} />
      <span className="text-4xl uppercase font-bold">{accountTypeName}</span>
    </div>
  );
}
