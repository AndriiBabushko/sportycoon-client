import { gql } from "../__generated__";

export const LOGIN = gql(/* GraphQL */ `
  mutation Login($input: LoginUserInput!) {
    login(loginUserInput: $input) {
      access_token
      refresh_token
    }
  }
`);
