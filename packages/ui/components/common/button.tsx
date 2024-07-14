import React, { ReactNode, ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib";
import { Slot } from "@radix-ui/react-slot";

const Classes = {
  default:
    "items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none " +
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  buttonStyle: {
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
    buttonStyle: Classes.buttonStyle,
    fullWidth: Classes.fullWidth,
    rounded: Classes.rounded,
  },
  defaultVariants: {
    buttonStyle: "primary",
    fullWidth: false,
  },
});

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, buttonStyle, rounded, fullWidth, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ buttonStyle, fullWidth, className, rounded })
        )}
        {...props}
      >
        {props.children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
