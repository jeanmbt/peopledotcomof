import { ApolloQueryResult } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";
import { PeopleQueryResult } from "../graphql/generated/graphql-generated-types";

export interface TablePerson {
  people?: ApolloQueryResult<PeopleQueryResult>;
  handleSpecialtyClick: (specialty: string) => void;
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  handleChangeRowsPerPage: any;
  setSortBy: SetStateAction<Dispatch<string>>;
  rowsPerPage: number;
  page: number;
  sortBy?: string;
}