import React, { forwardRef } from "react";
import {
  Input as ChakraUIInput,
  InputProps as ChakraUIInputProps,
} from "@chakra-ui/react";
import { cva, VariantProps } from "class-variance-authority";

const Classes = {
  default: "",
};

const inputVariants = cva(Classes.default, {
  variants: {},
});

interface InputProps
  extends ChakraUIInputProps,
    VariantProps<typeof inputVariants> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size, color, className, ...props }, ref) => {
    return <ChakraUIInput ref={ref} {...props} className={className} />;
  }
);

Input.displayName = "Input";

export { Input, inputVariants };
