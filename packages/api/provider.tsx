"use client";

import { ApolloProvider } from "@apollo/client";
import type { FC } from "react";
import React from "react";
import { client } from "./utils";

interface SportyCoonApiProviderProps {
  children: React.ReactNode;
}

const SportyCoonApiProvider: FC<SportyCoonApiProviderProps> = ({
  children,
}) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default SportyCoonApiProvider;
