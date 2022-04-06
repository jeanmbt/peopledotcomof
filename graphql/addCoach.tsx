import { gql } from "apollo-server-micro";

export const ADD_COACH = gql`
  mutation createCoach($data: CoachCreateInput!) {
    createCoach(data: $data) {
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
