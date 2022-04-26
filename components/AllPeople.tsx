import { gql, useQuery, useLazyQuery, NetworkStatus } from "@apollo/client";
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
import React, { Fragment, useEffect } from "react";
import { GET_PEOPLE } from "../graphql/getPeople";
import { StyledIndexTableCell } from "../styles/Table/Table.styles";
import { TablePerson } from "../types/tablePerson";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { TablePaginationActions } from "./TablePaginationActions";

// const PEOPLE_QUERY = gql`
//   query People($offset: Int, $limit: Int) {
//     people(offset: $offset, limit: $limit) {
//       id
//       name
//       specialties {
//         id
//         name
//       }
//     }
//   }
// `;

export const TableAllPeople = (props: TablePerson) => {
  let people;

  const {
    handleSpecialtyClick,
    rowsPerPage,
    page,
    // handleChangePage,
    handleChangeRowsPerPage,
    // data,
    // error,
    // loading,
    setPage,
    count,
  } = props;

  const [cursor, setCursor] = React.useState(0);

  const [getPeople, { loading, error, data, fetchMore }] = useLazyQuery(GET_PEOPLE, {
    variables: { skip: cursor, take: rowsPerPage },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    if (!data) {
      getPeople();
    }
  });

  // const a = fetchMore({
  //   query: { GET_PEOPLE },
  //   variables: { skip: cursor, take: rowsPerPage },
  // });

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setCursor(data.people.slice(-1)[0].id);
    setPage(newPage);
    console.log(`cursor: ${cursor}`);
    // console.log(`cursor ${cursor}`);
    fetchMore({
      query: gql`
        query People($take: Int, $skip: Int) {
          people(take: $take, skip: $skip) {
            id
            name
            specialties {
              id
              name
            }
          }
        }
      `,
      variables: { skip: cursor, take: rowsPerPage },
    });

    // console.log(`first person id: ${data.people[0].id}`);
    // console.log(`page: ${page}`);
    console.log("hi!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  };

  // console.log("cursor =>" + " " + cursor);

  // console.log(data.people.length);

  if (data?.loading || loading) {
    return <Loading />;
  }

  // if (data) {
  //   people = data.data.people;
  // }

  if (data) {
    people = data.people;
    console.log(`first person id: ${data.people[0].id}`);
    console.log(`page: ${page}`);

    console.log(`cursor: ${cursor}`);
  }

  // if (data) {
  //   people = data;
  // }

  if (error || !data) {
    return <Error error={error} />;
  }

  // if (!data) {
  //   // const error = { message: "hmm" };
  //   return <Error error={error} />;
  // }

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - count) : 0;

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
          {/* <TablePagination
            // nextItemButtonProps={{ fetchMore({variables: {skip: cursor, take: rowsPerPage}}), cursor }}
            labelRowsPerPage={"People per page"}
            rowsPerPageOptions={[15, 50, 100, { label: "All", value: -1 }]}
            colSpan={3}
            count={count}
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
          /> */}
        </TableRow>
      </TableFooter>
    </Fragment>
  );
};
