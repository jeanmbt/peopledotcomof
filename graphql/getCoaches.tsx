import { gql } from "apollo-server-micro";

export const GET_COACHES = gql`
  query coaches {
    coaches {
      id
      name
      specialties {
        id
        name
      }
    }
  }
`;
