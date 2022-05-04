import type { NextPage } from "next";
import {
  Box,
  Container,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import { TableHeaderCell } from "../../styles/Table/Table.styles";
import React from "react";
import { TablePeopleBySpecialty } from "../../components/PeopleBySpecialty";
import { TableAllPeople } from "../../components/AllPeople";
import { useQuery } from "@apollo/client";
import { PEOPLE_COUNT } from "../../graphql/getPeopleCount";

const People: NextPage = () => {
  let count = "?";

  const { data } = useQuery(PEOPLE_COUNT);

  if (data) {
    count = data.aggregatePerson._count._all;
  }

  const [sortBy, setSortBy] = React.useState("");

  const handleSpecialtyClick = (specialtyName: string) => {
    if (sortBy === "" || sortBy !== specialtyName) {
      setSortBy(specialtyName);
    } else if (sortBy === specialtyName) {
      setSortBy("");
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        paddingY={5}
        sx={{
          width: [1, 700, 900],
        }}
      >
        <Box component={Paper}>
          <TableContainer>
            <Table aria-label="simple table" size="small">
              <TableHead>
                <TableRow>
                  <TableHeaderCell>
                    <Typography>Coach</Typography>
                  </TableHeaderCell>
                  <TableHeaderCell>
                    <Tooltip title="Click on a specialty to filter">
                      <Typography>Specialties{sortBy && `: ${sortBy}`}</Typography>
                    </Tooltip>
                  </TableHeaderCell>
                  <TableHeaderCell align="right"></TableHeaderCell>
                </TableRow>
              </TableHead>
              {sortBy ? (
                <TablePeopleBySpecialty
                  count={count}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                  handleSpecialtyClick={handleSpecialtyClick}
                />
              ) : (
                <TableAllPeople
                  count={count}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                  handleSpecialtyClick={handleSpecialtyClick}
                />
              )}
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Container>
  );
};

export default People;
