import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://sportycoon-api.up.railway.app/graphql",
  cache: new InMemoryCache(),
});
