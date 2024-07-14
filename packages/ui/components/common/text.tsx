import React, { ReactNode, FC, HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib";

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

const Text: FC<TextProps> = ({
  className,
  textVariant,
  color,
  children,
  ...props
}) => {
  return (
    <p className={cn(textVariants({ textVariant, className }))} {...props}>
      {children}
    </p>
  );
};

Text.displayName = "Text";

export { Text, textVariants };
