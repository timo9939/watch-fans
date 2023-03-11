import { gql } from '@apollo/client';

export const QUERY_GETCONTENTS = gql`

  query getContents {
    Name
    Price
    Descrition
    }
  }
`;
