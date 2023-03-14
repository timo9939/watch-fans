import { gql } from '@apollo/client';

export const QUERY_GETCONTENTS = gql`

query {
  getAllProduct {
    description
    name
    photo
    price
  }
}
`;
