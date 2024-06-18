import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($input: LoginUserInput!) {
    login(loginUserInput: $input) {
      access_token
      refresh_token
    }
  }
`;
