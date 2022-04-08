import { useQuery } from "@apollo/client";
import {
  TableBody,
  Button,
  TableCell,
  TableRow,
  TableFooter,
  TablePagination,
  Tooltip,
} from "@mui/material";
import Link from "next/link";
import React, { Fragment } from "react";
import { GET_PEOPLE } from "../graphql/getPeople";
import { StyledIndexTableCell } from "../styles/Table/Table.styles";
import { TablePerson } from "../types/tablePerson";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { TablePaginationActions } from "./TablePaginationActions";

export const TableAllPeople = (props: TablePerson) => {
  let people = undefined;
  const { loading, error, data } = useQuery(GET_PEOPLE);

  const { handleSpecialtyClick, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage } =
    props;

  if (loading) {
    return <Loading />;
  }

  if (data) {
    people = data.people;
  }

  if (error || !data) {
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
                  title={`Show all people that specialize in ${specialty.name}`}
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
