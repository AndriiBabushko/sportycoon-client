import { gql } from "@apollo/client";

export const REFRESH_TOKEN = gql`
  mutation RefreshToken($input: RefreshTokenInput!) {
    refreshToken(refreshTokenInput: $input) {
      access_token
      refresh_token
    }
  }
`;
