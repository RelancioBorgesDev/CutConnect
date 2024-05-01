import { ComponentProps, ReactNode } from "react";

interface FormContainerProps extends ComponentProps<"form"> {
  children: ReactNode;
}

export default function FormContainer({
  children,
  ...props
}: FormContainerProps) {
  return (
    <form
      className="w-full flex flex-col items-center gap-8 relative pb-8"
      {...props}
    >
      {children}
    </form>
  );
}
