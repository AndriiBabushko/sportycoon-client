"use client";

import { ApolloClient, ApolloProvider } from "@apollo/client";
import type { FC } from "react";
import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { defaultApolloClientOptions } from "./utils";
import { queryClient } from "./utils/query-client";

interface SportyCoonApiProviderProps {
  children: React.ReactNode;
  getAuthTokens: () => Promise<{
    access_token: string | undefined;
    refresh_token: string | undefined;
  }>;
}

const SportyCoonApiProvider: FC<SportyCoonApiProviderProps> = ({
  children,
  getAuthTokens,
}) => {
  return (
    <ApolloProvider
      client={
        new ApolloClient({
          ...defaultApolloClientOptions,
          defaultContext: {
            getAuthTokens,
          },
        })
      }
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ApolloProvider>
  );
};

export default SportyCoonApiProvider;
