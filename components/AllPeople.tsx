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
  Box,
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
import spinner from "../public/spinner.svg";

export const TableAllPeople = (props: TablePerson) => {
  let people: any[] | Promise<ApolloQueryResult<any>> | any;

  const { handleSpecialtyClick, count }: any = props;

  const [cursor, setCursor] = React.useState(0);

  const [getPeople, { loading, refetch, error, data, fetchMore, networkStatus }] = useLazyQuery(
    GET_PEOPLE,
    {
      variables: { skip: cursor, take: 10 },
    }
  );

  useEffect((): any => {
    if (!data) {
      getPeople();
    }
  });

  if (data?.loading || loading) {
    return <Loading />;
  }

  if (data) {
    people = data.people;
  }

  if (error || !data) {
    return <Error error={error} />;
  }

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
          {/* // TODO: Make a component */}
          <TableCell>
            <InView
              onChange={(inView) => {
                setCursor(data.people.slice(-1)[0].id);
                if (inView && data.people.slice(-1)[0].id !== count) {
                  fetchMore({
                    variables: {
                      skip: cursor,
                      take: 15,
                    },
                  });
                }
              }}
            />
          </TableCell>
          <TableCell>
            {data.people.slice(-1)[0].id !== count ? (
              <Box
                sx={{
                  margin: "1em",
                  height: "1em",
                  width: "1em",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(${spinner.src})`,
                  backgroundPosition: "center",
                }}
              ></Box>
            ) : (
              <Box
                sx={{
                  margin: "1em",
                  height: "1em",
                  width: "1em",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(${spinner.src})`,
                  backgroundPosition: "center",
                }}
              >
                That is as many we get!
              </Box>
            )}
          </TableCell>
        </TableRow>
      </TableBody>
    </Fragment>
  );
};
