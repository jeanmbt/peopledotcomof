import { gql } from "apollo-server-micro";

export const PEOPLE_COUNT = gql`
  query _count {
    aggregatePerson {
      _count {
        _all
      }
    }
  }
`;
