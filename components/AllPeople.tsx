import { gql, useQuery, useLazyQuery, NetworkStatus, ApolloQueryResult } from "@apollo/client";
import {
  TableBody,
  Button,
  TableCell,
  TableRow,
  TableFooter,
  TablePagination,
  Tooltip,
  Container,
} from "@mui/material";
import Link from "next/link";
import React, { EffectCallback, Fragment, useEffect } from "react";
import { GET_PEOPLE } from "../graphql/getPeople";
import { StyledIndexTableCell } from "../styles/Table/Table.styles";
import { TablePerson } from "../types/tablePerson";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { TablePaginationActions } from "./TablePaginationActions";
import { InView } from "react-intersection-observer";

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
  let people: any[] | Promise<ApolloQueryResult<any>> | any;

  const {
    handleSpecialtyClick,
    // handleChangeRowsPerPage,
    // data,
    // error,
    // loading,
    // setPage,
    count,
  }: any = props;

  const [cursor, setCursor] = React.useState(0);

  const [getPeople, { loading, refetch, error, data, fetchMore, networkStatus }] = useLazyQuery(
    GET_PEOPLE,
    {
      variables: { skip: cursor, take: 5 },
      // notifyOnNetworkStatusChange: true,
    }
  );

  useEffect((): any => {
    if (!data) {
      console.log("getting people...");
      // first fetch
      getPeople();
      console.log("/////////////////////////    fetched first data! 👉");
      // setCursor(data?.people.slice(-1)[0].id);
    }

    // if (data && fetchMore) {
    //   fetchMore({});
    // }
  }, [cursor, data, getPeople]);

  // const a = fetchMore({
  //   query: { GET_PEOPLE },
  //   variables: { skip: cursor, take: rowsPerPage },
  // });

  // console.log(data.people.length);

  if (data?.loading || loading) {
    return <Loading />;
  }

  // if (data) {
  //   people = data.data.people;
  // }

  if (data) {
    people = data.people;

    console.log("data ->");
    console.log(data);
    console.log(data.people);
    console.log(` 👨‍🦲 first person id: ${data.people[0].id},  first person of the list:`);
    console.log(data.people[0]);
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

  return (
    <Fragment>
      <TableBody>
        {people.map(
          (person: {
            id: string;
            name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal;
            specialties: any[];
          }) => (
            <TableRow key={person.id + "row"} sx={{ height: "3em" }}>
              <StyledIndexTableCell component="th" scope="row" sx={{ paddingX: [1, 1, 2] }}>
                <Link href={`people/${person.id}`} passHref>
                  {person.name}
                </Link>
              </StyledIndexTableCell>
              <StyledIndexTableCell>
                {person.specialties.map((specialty: { id: any; name: {} }) => (
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
          )
        )}
        <TableRow>
          <InView
            onChange={(inView) => {
              setCursor(data.people.slice(-1)[0].id);
              if (inView && data.people.slice(-1)[0].id !== count) {
                fetchMore({
                  variables: {
                    skip: cursor,
                    take: 5,
                  },
                });
                // console.log("Updating cursor to last id....");
                // console.log(`last id ${data.people.slice(-1)[0].id}`);
              }
            }}
          >
            <Container>
              {data.people.slice(-1)[0].id !== count ? "loading more people..." : ""}
            </Container>
          </InView>
        </TableRow>
      </TableBody>
    </Fragment>
  );
};
