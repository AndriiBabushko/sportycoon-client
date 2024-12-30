import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = new HttpLink({
  uri: "https://sportycoon-server.onrender.com/graphql",
});

const authLink = setContext((_, prevContext) => {
  const { accessToken } = prevContext;
  // console.log(prevContext.headers);

  return {
    headers: {
      authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
  };
});

export const apolloClient = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache(),
});
