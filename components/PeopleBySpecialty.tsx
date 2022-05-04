import { useLazyQuery } from "@apollo/client";
import { Button, TableBody, TableRow, Tooltip } from "@mui/material";
import React, { Fragment, useEffect } from "react";
import { StyledIndexTableCell } from "../styles/Table/Table.styles";
import { TablePerson } from "../types/tablePerson";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { GET_PEOPLE_BY_SPECIALTY } from "../graphql/getPeopleBySpecialty";
import Link from "next/link";

export const TablePeopleBySpecialty = (props: TablePerson) => {
  const { handleSpecialtyClick, sortBy } = props;
  let people = undefined;
  const variables = {
    where: {
      name: { equals: sortBy },
    },
  };

  const [getPeople, { loading, error, data }] = useLazyQuery(GET_PEOPLE_BY_SPECIALTY, {
    variables,
  });

  useEffect(() => {
    if (!data) {
      getPeople();
    }
  });

  if (loading) return <Loading />;

  if (data) {
    console.log(data);
    people = data.findFirstSpecialty.persons;
  }

  if (error || !people) {
    return <Error error={error} />;
  }

  return (
    <>
      <TableBody>
        {people.map((person) => (
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
      </TableBody>
    </>
  );
};
