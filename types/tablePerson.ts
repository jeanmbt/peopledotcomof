import { ApolloError, ApolloQueryResult } from "@apollo/client";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Dispatch, SetStateAction } from "react";
import { ResolverData } from "type-graphql";
import { PeopleQueryResult } from "../graphql/generated/graphql-generated-types";

export interface TablePerson {
  count?: string;
  loading?: ReactJSXElement;
  error?: ApolloError;
  people?: ApolloQueryResult<PeopleQueryResult>;
  handleSpecialtyClick: (specialty: string) => void;
  setSortBy: SetStateAction<Dispatch<string>>;
  sortBy?: string;
  data?: ApolloQueryResult<ResolverData>;
}
