import SportyCoonApiProvider from "./provider";

export * from "./utils";
export * from "./gql";
export * from "./rest";
export { useQuery, useMutation } from "@apollo/client";
export { setContext } from "@apollo/client/link/context";

export default SportyCoonApiProvider;
