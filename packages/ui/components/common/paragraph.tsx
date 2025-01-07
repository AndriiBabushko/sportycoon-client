import type { HTMLAttributes, JSX } from "react";
import React from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "@sportycoon/ui/lib/utils";

const Classes = {
  default: "font-normal",
  variant: {
    nicoMoji: "--font-nicoMoji",
    montserrat: "--font-montserrat",
    montserratBold: "--font-montserrat font-bold",
  },
};

const paragraphVariants = cva(Classes.default, {
  variants: {
    variant: Classes.variant,
  },
  defaultVariants: {
    variant: "montserrat",
  },
});

export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

function Paragraph({
  className,
  variant,
  children,
  ...props
}: TextProps): JSX.Element {
  return (
    <p className={cn(paragraphVariants({ variant, className }))} {...props}>
      {children}
    </p>
  );
}

Paragraph.displayName = "Paragraph";

export { Paragraph, paragraphVariants };
