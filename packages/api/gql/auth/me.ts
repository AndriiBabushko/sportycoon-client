import { gql } from "../__generated__";

export const ME = gql(/* GraphQL */ `
  {
    me {
      id
      email
      username
    }
  }
`);
