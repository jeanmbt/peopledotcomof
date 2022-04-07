import { gql } from "apollo-server-micro";

export const GET_PEOPLE_BY_SPECIALTY = gql`
  query Specialties($where: SpecialtyWhereInput) {
    specialties(where: $where) {
      name
      id
      persons {
        id
        name
        specialties {
          id
          name
        }
      }
    }
  }
`;
