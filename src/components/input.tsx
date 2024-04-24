import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends ComponentProps<"input"> {}

export default function Input({
  placeholder,
  type,
  className,
  ...props
}: InputProps) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={twMerge(
        "p-4 rounded-lg bg-neutral-700 focus:border-2 focus:border-main-yellow outline-none",
        className
      )}
      {...props}
    />
  );
}
