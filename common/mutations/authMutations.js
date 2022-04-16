import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($email: String! $password: String!) {
    login(email: $email password: $password) {
      user {
        token
        email
        name
        id
      }
    }
  }
`;

export const REGISTER = gql`
  mutation Register($name: String! $email: String! $password: String!) {
    register(name: $name email: $email password: $password) {
      user {
        token
        email
        name
        id
      } 
    }
  }
`;

export const SIGN_UP_WITH_GOOGLE = gql`
  mutation SignUpWithGoogle($accessToken: String! $name: String! $email: String! $password: String!) {
    signUpWithGoogle(accessToken: $accessToken name: $name email: $email password: $password) {
      user {
        token
        email
        name
        id
      } 
    }
  }
`;

export const LOGOUT = gql`
  mutation Logout {
    logout {
      success
    }
  }
`;
