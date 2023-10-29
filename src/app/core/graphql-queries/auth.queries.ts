import { gql } from '@apollo/client/core';

export const REGISTER_USER_MUTATION = gql`
  mutation RegisterUser(
    $email: String!,
    $firstName: String!,
    $lastName: String!,
    $password: String!,
    $username: String!) {
    createUser(
      email: $email,
      firstName: $firstName,
      lastName: $lastName,
      password: $password,
      username: $username
    ) {
      user {
        id
        username
        firstName
        lastName
        email
      }
    }
  }
`;

export const LOGIN_USER_MUTATION = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      user {
        id
        username
        email
      }
    }
  }
`;

export const TOKEN_AUTH_MUTATION = gql `
  mutation TokenAuth($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
      payload
      refreshExpiresIn
    }
  }
`;

export const VERIFY_TOKEN_MUTATION =  gql `
  mutation VerifyToken($token: String!) {
    verifyToken(token: $token) {
      payload
    }
  }
`;
