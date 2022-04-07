import { gql, useQuery } from "@apollo/client";
import {
  Button,
  TableBody,
  TableCell,
  TableFooter,
  TablePagination,
  TableRow,
  Tooltip,
} from "@mui/material";
import { Fragment } from "react";
import { StyledIndexTableCell } from "../styles/Table/Table.styles";
import { TablePerson } from "../types/tablePerson";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { TablePaginationActions } from "./TablePaginationActions";
import { GET_PEOPLE_BY_SPECIALTY } from "../graphql/getPeopleBySpecialty";
import Link from "next/link";

export const TablePeopleBySpecialty = (props: TablePerson) => {
  const {
    handleSpecialtyClick,
    rowsPerPage,
    page,
    sortBy,
    handleChangePage,
    handleChangeRowsPerPage,
  } = props;
  let people = undefined;
  const variables = {
    where: {
      name: { equals: sortBy },
    },
  };

  const { loading, error, data } = useQuery(GET_PEOPLE_BY_SPECIALTY, { variables });

  if (loading) return <Loading />;

  if (data) {
    people = data.specialties[0].persons;
  }

  if (error || !people) {
    return <Error error={error} />;
  }

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - people.length) : 0;

  return (
    <Fragment>
      <TableBody>
        {(rowsPerPage > 0
          ? people.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : people
        ).map((person) => (
          <TableRow key={person.id + "row"} sx={{ height: "3em" }}>
            <StyledIndexTableCell component="th" scope="row" sx={{ paddingX: [1, 1, 2] }}>
              <Link href={`people/${person.id}`} passHref>
                {person.name}
              </Link>
            </StyledIndexTableCell>
            <StyledIndexTableCell>
              {person.specialties.map((specialty) => (
                <Tooltip
                  key={specialty.id + person.id + "tooltip"}
                  title={
                    specialty.name === sortBy
                      ? `Click again to remove ${specialty.name} filter`
                      : `Click to show People specialized in ${specialty.name}`
                  }
                >
                  <Button
                    onClick={(e) => {
                      handleSpecialtyClick(specialty.name);
                    }}
                    sx={{ margin: "0 0.5em" }}
                    key={specialty.id + person.id + +Math.floor(Math.random() * 999999)}
                  >
                    {specialty.name}
                  </Button>
                </Tooltip>
              ))}
            </StyledIndexTableCell>
            <StyledIndexTableCell>
              <Button size="small" variant="contained" href={`people/${person.id}`}>
                more
              </Button>
            </StyledIndexTableCell>
          </TableRow>
        ))}
        {emptyRows > 0 && <TableRow style={{ height: "-10" }}></TableRow>}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TablePagination
            rowsPerPageOptions={[15, 50, 100, { label: "All", value: -1 }]}
            colSpan={3}
            count={people.length}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
              inputProps: {
                "aria-label": "per page",
              },
              native: true,
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
          />
        </TableRow>
      </TableFooter>
    </Fragment>
  );
};
