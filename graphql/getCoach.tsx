import { gql } from "apollo-server-micro";

export const GET_COACH = gql`
  query FindFirstCoach($where: CoachWhereInput) {
    findFirstCoach(where: $where) {
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
      posts {
        id
        title
      }
    }
  }
`;
