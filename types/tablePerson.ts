import { ApolloError, ApolloQueryResult } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";
import { PeopleQueryResult } from "../graphql/generated/graphql-generated-types";

export interface TablePerson {
  setPage?: any;
  count?: any;
  loading?: any;
  error?: ApolloError;
  people?: ApolloQueryResult<PeopleQueryResult>;
  handleSpecialtyClick: (specialty: string) => void;
  setSortBy: SetStateAction<Dispatch<string>>;
  sortBy?: string;
  data?: ApolloQueryResult<any>;
}