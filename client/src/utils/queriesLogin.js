import { gql } from '@apollo/client';

export const GETLOGIN = gql`

query Query($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
  }
}
`;
