import { gql } from "../__generated__";

export const ME = gql(/* GraphQL */ `
  query Me {
    me {
      id
      email
      username
    }
  }
`);
