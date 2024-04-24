import { ComponentProps, ReactNode } from "react";

interface HeaderContainerProps extends ComponentProps<"header"> {
  children: ReactNode;
}
export default function HeaderContainer({children}: HeaderContainerProps) {
  return (
    <header className="w-full flex flex-col items-start gap-8">
      {children}
    </header>
  );
}
