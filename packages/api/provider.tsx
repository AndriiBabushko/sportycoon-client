import { ApolloProvider } from "@apollo/client";
import React, { FC } from "react";
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
