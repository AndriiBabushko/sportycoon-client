import { gql } from "../__generated__";

export const DELETE_USER_PROFILE = gql(/* GraphQL */ `
  mutation DELETE_USER_PROFILE($input: DeleteUserInput!) {
    deleteUserProfile(deleteUserInput: $input) {
      statusCode
      message
    }
  }
`);
