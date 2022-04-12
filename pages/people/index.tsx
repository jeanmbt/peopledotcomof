import type { NextPage } from "next";
import {
  Box,
  Container,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Tooltip,
  Typography,
} from "@mui/material";
import { TableHeaderCell } from "../../styles/Table/Table.styles";
import React from "react";
import { TablePeopleBySpecialty } from "../../components/PeopleBySpecialty";
import { TableAllPeople } from "../../components/AllPeople";
import { useQuery, gql } from "@apollo/client";
import apolloClient from "../../lib/apollo";
import { GET_PEOPLE } from "../../graphql/getPeople";

const People: NextPage = ({ data }: any) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);
  const [sortBy, setSortBy] = React.useState("");

  const handleSpecialtyClick = (specialtyName: string) => {
    if (sortBy === "" || sortBy !== specialtyName) {
      setSortBy(specialtyName);
    } else if (sortBy === specialtyName) {
      setSortBy("");
    }
  };

  console.log(data);

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
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
        <Button sx={{ margin: "0.5em 0", float: "right" }} variant="outlined" href={`people/new`}>
          Add Coach
        </Button>
        <TableContainer component={Paper}>
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
                sortBy={sortBy}
                setSortBy={setSortBy}
                rowsPerPage={rowsPerPage}
                page={page}
                handleSpecialtyClick={handleSpecialtyClick}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                handleChangePage={handleChangePage}
              />
            ) : (
              <TableAllPeople
                sortBy={sortBy}
                setSortBy={setSortBy}
                rowsPerPage={rowsPerPage}
                page={page}
                handleSpecialtyClick={handleSpecialtyClick}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                handleChangePage={handleChangePage}
              />
            )}
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default People;

export async function getServerSideProps() {
  const data = await apolloClient.query({
    query: GET_PEOPLE,
    variables: { offset: 0, limit: 10 },
    notifyOnNetworkStatusChange: true,
  });
  return {
    props: { data }, // will be passed to the page component as props
  };
}
