import type { ButtonHTMLAttributes } from "react";
import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@ui/lib/utils";

const Classes = {
  default:
    "items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none " +
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  variant: {
    primary: "bg-gray-700 text-gray-100 hover:bg-gray-900",
    "outline-primary":
      "text-gray-700 border border-gray-700 hover:bg-gray-900 hover:text-gray-100",
    secondary: "bg-gray-50 text-gray-900 hover:bg-gray-100",
    "outline-secondary":
      "text-gray-50 border border-gray-50 hover:bg-gray-100 hover:text-gray-900",
    "ghost-primary": "hover:bg-gray-900 hover:text-gray-100",
    "ghost-secondary": "text-gray-50 hover:bg-gray-100 hover:text-gray-900",
    link: "underline-offset-4 hover:underline text-primary",
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
    fullWidth: Classes.fullWidth,
    round: Classes.round,
  },
  defaultVariants: {
    variant: "primary",
    fullWidth: false,
  },
});

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, type, children, variant, round, fullWidth, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, fullWidth, className, round }))}
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
