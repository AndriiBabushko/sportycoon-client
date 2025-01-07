import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = new HttpLink({
  uri: `${
    process.env.NEXT_PUBLIC_SPORTYCOON_API_URL ||
    "https://sportycoon-server.onrender.com"
  }/graphql`,
});

const authLink = setContext(async (_, prevContext) => {
  const { getAuthTokens } = prevContext;
  const tokens = await getAuthTokens();

  return {
    headers: {
      authorization: `Bearer ${tokens.access_token}`,
    },
  };
});

export const defaultApolloClientOptions = {
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache(),
};

export const apolloClient = new ApolloClient(defaultApolloClientOptions);
