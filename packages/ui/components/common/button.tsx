import type { ButtonHTMLAttributes } from "react";
import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@sportycoon/ui/lib/utils";

const Classes = {
  default:
    "items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none " +
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  variant: {
    transparent: "bg-transparent",
    primary: "bg-[#454542] text-[#DDDDDC] hover:bg-[#767675]",
    "outline-primary":
      "text-[#454542] border border-[#454542] hover:bg-[#767675] hover:text-[#DDDDDC]",
    secondary: "bg-[#BBBBBA] text-[#454542] hover:bg-[#DDDDDC]",
    "outline-secondary":
      "text-[#BBBBBA] border border-[#BBBBBA] hover:bg-[#DDDDDC] hover:text-[#454542]",
    "ghost-primary": "hover:bg-[#454542] hover:text-[#DDDDDC]",
    "ghost-secondary": "text-[#BBBBBA] hover:bg-[#DDDDDC] hover:text-[#454542]",
    link: "text-white underline-offset-4 hover:underline hover:text-white",
    "danger-dark": "bg-[#A11010] text-[#DDDDDC] hover:bg-[#C71616]",
    "danger-light": "bg-[#E31B1B] text-[#DDDDDC] hover:bg-[#C71616]",
    "success-dark": "bg-[#0A6A0A] text-[#DDDDDC] hover:bg-[#0C7A0C]",
    "success-light": "bg-[#0A6A0A] text-[#DDDDDC] hover:bg-[#0C7A0C]",
  },
  round: {
    default: "rounded-md",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  },
  size: {
    paddingLess: "p-0",
    sm: "px-[4px] py-[2px]",
    md: "px-[8px] py-[4px]",
    lg: "px-[12px] py-[6px]",
    xl: "px-[16px] py-[8px]",
    full: "w-full",
  },
  fullWidth: {
    false: "w-auto",
    true: "w-full",
  },
};

const buttonVariants = cva(Classes.default, {
  variants: {
    variant: Classes.variant,
    size: Classes.size,
    fullWidth: Classes.fullWidth,
    round: Classes.round,
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    fullWidth: false,
  },
});

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, type, size, children, variant, round, fullWidth, ...props },
    ref
  ) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, fullWidth, className, size, round })
        )}
        ref={ref}
        type={type || "button"}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
