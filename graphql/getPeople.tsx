import { gql } from "apollo-server-micro";

export const GET_PEOPLE = gql`
  query People($take: Int, $skip: Int) {
    people(take: $take, skip: $skip) {
      id
      name
      specialties {
        id
        name
      }
    }
  }
`;
