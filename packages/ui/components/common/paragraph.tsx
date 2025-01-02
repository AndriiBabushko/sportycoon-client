import type { HTMLAttributes, JSX } from "react";
import React from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "@sportycoon/ui/lib/utils";

const Classes = {
  default: "font-normal",
  paragraphVariant: {
    nicoMoji: "--font-nicoMoji",
    montserrat: "--font-montserrat",
    montserratBold: "--font-montserrat font-bold",
  },
};

const paragraphVariants = cva(Classes.default, {
  variants: {
    paragraphVariant: Classes.paragraphVariant,
  },
  defaultVariants: {
    paragraphVariant: "montserrat",
  },
});

export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

function Paragraph({
  className,
  paragraphVariant,
  children,
  ...props
}: TextProps): JSX.Element {
  return (
    <p
      className={cn(paragraphVariants({ paragraphVariant, className }))}
      {...props}
    >
      {children}
    </p>
  );
}

Paragraph.displayName = "Paragraph";

export { Paragraph, paragraphVariants };
