import { gql } from "../__generated__";

export const REFRESH_TOKEN = gql(/* GraphQL */ `
  mutation RefreshToken($input: RefreshTokenInput!) {
    refreshToken(refreshTokenInput: $input) {
      access_token
      refresh_token
    }
  }
`);
