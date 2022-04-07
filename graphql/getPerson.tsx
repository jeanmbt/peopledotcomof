import { gql } from "apollo-server-micro";

export const GET_PERSON = gql`
  query FindFirstPerson($where: PersonWhereInput) {
    findFirstPerson(where: $where) {
      id
      name
      email
      phone
      street
      streetNumber
      zip
      city
      website
      specialties {
        id
        name
      }
    }
  }
`;
