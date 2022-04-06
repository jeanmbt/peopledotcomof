import { ApolloQueryResult } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";
import { CoachesQueryResult } from "../generated/graphql-generated-types";

export interface TableCoach {
  coaches?: ApolloQueryResult<CoachesQueryResult>;
  handleSpecialtyClick: (specialty: string) => void;
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  handleChangeRowsPerPage: any;
  setSortBy: SetStateAction<Dispatch<string>>;
  rowsPerPage: number;
  page: number;
  sortBy?: string;
}