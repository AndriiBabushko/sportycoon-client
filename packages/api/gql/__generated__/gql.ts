/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
  "\n  mutation Login($input: LoginUserInput!) {\n    login(loginUserInput: $input) {\n      access_token\n      refresh_token\n    }\n  }\n":
    types.LoginDocument,
  "\n  query ME {\n    me {\n      id\n      email\n      username\n    }\n  }\n":
    types.MeDocument,
  "\n  query ME_DASHBOARD_LAYOUT {\n    me {\n      username\n      full_name\n    }\n  }\n":
    types.Me_Dashboard_LayoutDocument,
  "\n  query ME_ACCOUNT_PROFILE {\n    me {\n      id\n      username\n      full_name\n      email\n      gender\n      height {\n        unit\n        value\n      }\n      weight {\n        unit\n        value\n      }\n      goals\n      fitness_level\n      goal_weight {\n        unit\n        value\n      }\n      performance {\n        max_dips\n        max_pull_ups\n        max_push_ups\n        max_squats\n      }\n      spotify_id\n      google_id\n    }\n  }\n":
    types.Me_Account_ProfileDocument,
  "\n  mutation RefreshToken($input: RefreshTokenInput!) {\n    refreshToken(refreshTokenInput: $input) {\n      access_token\n      refresh_token\n    }\n  }\n":
    types.RefreshTokenDocument,
  "\n  mutation Register($input: RegisterUserInput!) {\n    register(registerUserInput: $input) {\n      access_token\n      refresh_token\n    }\n  }\n":
    types.RegisterDocument,
  "\n  query sayHello {\n    sayHello\n  }\n": types.SayHelloDocument,
  "\n  mutation DELETE_USER_PROFILE($input: DeleteUserInput!) {\n    deleteUserProfile(deleteUserInput: $input) {\n      statusCode\n      message\n    }\n  }\n":
    types.Delete_User_ProfileDocument,
  "\n    mutation UPDATE_USER_PROFILE($input: UpdateUserInput!) {\n        updateUserProfile(updateUserInput: $input) {\n            user {\n                id\n                email\n                username\n            }\n            statusCode,\n        }\n    }\n":
    types.Update_User_ProfileDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation Login($input: LoginUserInput!) {\n    login(loginUserInput: $input) {\n      access_token\n      refresh_token\n    }\n  }\n"
): (typeof documents)["\n  mutation Login($input: LoginUserInput!) {\n    login(loginUserInput: $input) {\n      access_token\n      refresh_token\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query ME {\n    me {\n      id\n      email\n      username\n    }\n  }\n"
): (typeof documents)["\n  query ME {\n    me {\n      id\n      email\n      username\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query ME_DASHBOARD_LAYOUT {\n    me {\n      username\n      full_name\n    }\n  }\n"
): (typeof documents)["\n  query ME_DASHBOARD_LAYOUT {\n    me {\n      username\n      full_name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query ME_ACCOUNT_PROFILE {\n    me {\n      id\n      username\n      full_name\n      email\n      gender\n      height {\n        unit\n        value\n      }\n      weight {\n        unit\n        value\n      }\n      goals\n      fitness_level\n      goal_weight {\n        unit\n        value\n      }\n      performance {\n        max_dips\n        max_pull_ups\n        max_push_ups\n        max_squats\n      }\n      spotify_id\n      google_id\n    }\n  }\n"
): (typeof documents)["\n  query ME_ACCOUNT_PROFILE {\n    me {\n      id\n      username\n      full_name\n      email\n      gender\n      height {\n        unit\n        value\n      }\n      weight {\n        unit\n        value\n      }\n      goals\n      fitness_level\n      goal_weight {\n        unit\n        value\n      }\n      performance {\n        max_dips\n        max_pull_ups\n        max_push_ups\n        max_squats\n      }\n      spotify_id\n      google_id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation RefreshToken($input: RefreshTokenInput!) {\n    refreshToken(refreshTokenInput: $input) {\n      access_token\n      refresh_token\n    }\n  }\n"
): (typeof documents)["\n  mutation RefreshToken($input: RefreshTokenInput!) {\n    refreshToken(refreshTokenInput: $input) {\n      access_token\n      refresh_token\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation Register($input: RegisterUserInput!) {\n    register(registerUserInput: $input) {\n      access_token\n      refresh_token\n    }\n  }\n"
): (typeof documents)["\n  mutation Register($input: RegisterUserInput!) {\n    register(registerUserInput: $input) {\n      access_token\n      refresh_token\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query sayHello {\n    sayHello\n  }\n"
): (typeof documents)["\n  query sayHello {\n    sayHello\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation DELETE_USER_PROFILE($input: DeleteUserInput!) {\n    deleteUserProfile(deleteUserInput: $input) {\n      statusCode\n      message\n    }\n  }\n"
): (typeof documents)["\n  mutation DELETE_USER_PROFILE($input: DeleteUserInput!) {\n    deleteUserProfile(deleteUserInput: $input) {\n      statusCode\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n    mutation UPDATE_USER_PROFILE($input: UpdateUserInput!) {\n        updateUserProfile(updateUserInput: $input) {\n            user {\n                id\n                email\n                username\n            }\n            statusCode,\n        }\n    }\n"
): (typeof documents)["\n    mutation UPDATE_USER_PROFILE($input: UpdateUserInput!) {\n        updateUserProfile(updateUserInput: $input) {\n            user {\n                id\n                email\n                username\n            }\n            statusCode,\n        }\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
