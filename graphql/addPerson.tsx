import { gql } from "apollo-server-micro";

export const ADD_PERSON = gql`
  mutation createPerson($data: PersonCreateInput!) {
    createPerson(data: $data) {
      email
      name
      phone
      street
      streetNumber
      zip
      city
      website
      specialties {
        name
      }
    }
  }
`;
