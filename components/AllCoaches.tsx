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
import { GET_COACHES } from "../graphql/getCoaches";
import { StyledIndexTableCell } from "../styles/Table/Table.styles";
import { TableCoach } from "../types/tableCoach";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { TablePaginationActions } from "./TablePaginationActions";

export const TableAllCoaches = (props: TableCoach) => {
  let coaches = undefined;
  const { loading, error, data } = useQuery(GET_COACHES);

  const {
    handleSpecialtyClick,
    rowsPerPage,
    page,

    handleChangePage,
    handleChangeRowsPerPage,
  } = props;

  if (loading) {
    return <Loading />;
  }

  if (data) {
    coaches = data.coaches;
  }

  if (error || !data) {
    return <Error error={error} />;
  }

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - coaches.length) : 0;

  return (
    <Fragment>
      <TableBody>
        {(rowsPerPage > 0
          ? coaches.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : coaches
        ).map((coach) => (
          <TableRow key={coach.id + "row"} sx={{ height: "3em" }}>
            <StyledIndexTableCell component="th" scope="row" sx={{ paddingX: [1, 1, 2] }}>
              <Link href={`coaches/${coach.id}`} passHref>
                {coach.name}
              </Link>
            </StyledIndexTableCell>
            <StyledIndexTableCell>
              {coach.specialties.map((specialty) => (
                <Tooltip
                  key={specialty.id + coach.id + "tooltip"}
                  title={`Show all coaches that specialize in ${specialty.name}`}
                >
                  <Button
                    onClick={(e) => {
                      handleSpecialtyClick(specialty.name);
                    }}
                    sx={{ margin: "0 0.5em" }}
                    key={specialty.id + coach.id + +Math.floor(Math.random() * 999999)}
                  >
                    {specialty.name}
                  </Button>
                </Tooltip>
              ))}
            </StyledIndexTableCell>
            <StyledIndexTableCell>
              <Button size="small" variant="contained" href={`coaches/${coach.id}`}>
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
            count={coaches.length}
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