import React, { ReactNode, FC } from "react";
import {
  Text as ChakraText,
  TextProps as ChakraTextProps,
} from "@chakra-ui/react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

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
  extends ChakraTextProps,
    VariantProps<typeof textVariants> {
  children: ReactNode;
}

const Text: FC<TextProps> = ({
  className,
  textVariant,
  size,
  color,
  children,
  ...props
}) => {
  return (
    <ChakraText
      className={cn(textVariants({ textVariant, className }))}
      {...props}
    >
      {children}
    </ChakraText>
  );
};

Text.displayName = "Text";

export { Text, textVariants };
