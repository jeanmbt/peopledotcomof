import type { GetServerSideProps, NextPage } from "next";
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
// import apolloClient from "../../lib/apollo";
import { initializeApollo, addApolloState } from "../../lib/apollo";
import { GET_PEOPLE } from "../../graphql/getPeople";
import { Loading } from "../../components/Loading";

const People: NextPage = ({ data }: any) => {
  // const People: NextPage = () => {
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

  // console.log("index" + data);
  // if (data.loading) {
  //   return <Loading />;
  // }

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
                data={data}
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

// export const getServerSideProps: GetServerSideProps = async (context) => {
export const getStaticProps = async (context) => {
  const apolloClient = initializeApollo();
  const GET_PEOPLE = gql`
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
  `;

  const data = await apolloClient.query({
    query: GET_PEOPLE,
    variables: { take: 15, offset: 0 },
    notifyOnNetworkStatusChange: true,
  });

  // return {
  //   props: { data }, // will be passed to the page component as props
  // };
  return addApolloState(apolloClient, {
    props: { data },
  });
};
