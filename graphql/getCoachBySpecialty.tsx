import { gql } from "apollo-server-micro";

export const GET_COACHES_BY_SPECIALTY = gql`
  query Specialties($where: SpecialtyWhereInput) {
    specialties(where: $where) {
      name
      id
      coaches {
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
