import { gql } from "../__generated__";

export const REGISTER = gql(/* GraphQL */ `
  mutation Register($input: RegisterUserInput!) {
    register(registerUserInput: $input) {
      access_token
      refresh_token
    }
  }
`);
