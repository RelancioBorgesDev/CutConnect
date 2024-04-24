"use client";
import Link from "next/link";
import React, { ComponentProps, ElementType } from "react";
import { twMerge } from "tailwind-merge";

interface GoBackProps extends ComponentProps<"a"> {
  icon: ElementType;
  path: string;
}

export default function GoBack({
  icon: Icon,
  path,
  className,
  ...props
}: GoBackProps) {
  return (
    <Link
      href={path}
      className={twMerge("absolute top-2", className)}
      {...props}
    >
      <span>
        <Icon size={64} />
      </span>
    </Link>
  );
}
