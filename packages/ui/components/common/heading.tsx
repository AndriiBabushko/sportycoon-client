import type { HTMLAttributes, JSX } from "react";
import React from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "@sportycoon/ui/lib/utils";

const Classes = {
  default: "font-normal",
  variant: {
    nicoMoji: "font-nico-moji",
    nicoMojiSemibold: "font-nico-moji font-semibold",
    nicoMojiBold: "font-nico-moji font-bold",
    montserrat: "font-montserrat",
    montserratSemibold: "font-montserrat font-semibold",
    montserratBold: "font-montserrat font-bold",
  },
};

const headingVariants = cva(Classes.default, {
  variants: {
    variant: Classes.variant,
  },
  defaultVariants: {
    variant: "montserrat",
  },
});

export interface HeadingProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

function Heading({
  className,
  variant,
  children,
  as = "h1",
  ...props
}: HeadingProps): JSX.Element {
  const Comp = as;

  return (
    <Comp className={cn(headingVariants({ variant, className }))} {...props}>
      {children}
    </Comp>
  );
}

Heading.displayName = "Heading";

export { Heading, headingVariants };
