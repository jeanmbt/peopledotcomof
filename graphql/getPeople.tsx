import { gql } from "apollo-server-micro";

export const GET_PEOPLE = gql`
  query People {
    people {
      id
      name
      specialties {
        id
        name
      }
    }
  }
`;
