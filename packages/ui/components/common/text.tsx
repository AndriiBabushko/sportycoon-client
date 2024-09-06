import type { ReactNode, HTMLAttributes, JSX } from "react";
import React from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "@ui/lib/utils";

const Classes = {
  default: "font-normal",
  textVariant: {
    nicoMoji: "--font-nicoMoji",
    montserrat: "--font-montserrat",
    montserratBold: "--font-montserrat font-bold",
  },
};

const textVariants = cva(Classes.default, {
  variants: {
    textVariant: Classes.textVariant,
  },
  defaultVariants: {
    textVariant: "montserrat",
  },
});

export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  children: ReactNode;
}

function Text({
  className,
  textVariant,
  children,
  ...props
}: TextProps): JSX.Element {
  return (
    <p className={cn(textVariants({ textVariant, className }))} {...props}>
      {children}
    </p>
  );
}

Text.displayName = "Text";

export { Text, textVariants };
