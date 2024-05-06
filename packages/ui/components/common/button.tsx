import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { FC } from "react";

const Classes = {
  default:
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none " +
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
  size: {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3",
    lg: "h-11 px-8",
    icon: "h-10 w-10 px-2",
  },
  rounded: {
    default: "rounded-md",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
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
    rounded: Classes.rounded,
    fullWidth: Classes.fullWidth,
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
    rounded: "default",
    fullWidth: false,
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  variant,
  size,
  rounded,
  fullWidth,
  asChild = false,
  ...props
}) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        buttonVariants({ variant, size, rounded, fullWidth, className })
      )}
      {...props}
    />
  );
};

Button.displayName = "Button";

export { Button, buttonVariants };
