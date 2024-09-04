"use client";

import { ApolloProvider } from "@apollo/client";
import type { FC } from "react";
import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { apolloClient } from "./utils";
import { queryClient } from "./utils/query-client";

interface SportyCoonApiProviderProps {
  children: React.ReactNode;
}

const SportyCoonApiProvider: FC<SportyCoonApiProviderProps> = ({
  children,
}) => {
  return (
    <ApolloProvider client={apolloClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ApolloProvider>
  );
};

export default SportyCoonApiProvider;
