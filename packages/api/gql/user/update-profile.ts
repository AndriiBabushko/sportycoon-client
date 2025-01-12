import { gql } from "../__generated__";

export const UPDATE_USER_PROFILE = gql(/* GraphQL */ `
    mutation UPDATE_USER_PROFILE($input: UpdateUserInput!) {
        updateUserProfile(updateUserInput: $input) {
            user {
                id
                email
                username
            }
            statusCode,
        }
    }
`);
