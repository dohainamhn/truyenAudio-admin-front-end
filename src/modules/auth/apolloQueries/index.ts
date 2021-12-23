import { gql } from '@apollo/client';

export const signInQuery = gql`
  mutation execLogin($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      _id
      email
    }
  }
`;
export const getMeQuery = gql`
  query getMe{
    me{
      email
    }
  }
`
