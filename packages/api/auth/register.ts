import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation Register($input: RegisterUserInput!) {
    register(registerUserInput: $input) {
      access_token
      refresh_token
    }
  }
`;
