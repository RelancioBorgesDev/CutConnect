import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface LabelProps extends ComponentProps<"label"> {
  children: ReactNode;
}

export default function Label({ children, className, ...props }: LabelProps) {
  return (
    <label className={twMerge("font-medium", className)} {...props}>
      {children}
    </label>
  );
}
