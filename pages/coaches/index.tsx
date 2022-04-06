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
import { TableCoachBySpecialty } from "../../components/CoachBySpecialty";
import { TableAllCoaches } from "../../components/AllCoaches";
import { useQuery } from "@apollo/client";
import { GET_COACHES } from "../../graphql/getCoaches";

const Coaches: NextPage = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);
  const [sortBy, setSortBy] = React.useState("");
  let coaches = undefined;
  const { loading, error, data } = useQuery(GET_COACHES);

  console.log(data);

  const handleSpecialtyClick = (specialtyName: string) => {
    if (sortBy === "" || sortBy !== specialtyName) {
      setSortBy(specialtyName);
    } else if (sortBy === specialtyName) {
      setSortBy("");
    }
  };

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
        <Button sx={{ margin: "0.5em 0", float: "right" }} variant="outlined" href={`coaches/new`}>
          Add Coach
        </Button>
        {/* <TableContainer component={Paper}>
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
              <TableCoachBySpecialty
                sortBy={sortBy}
                setSortBy={setSortBy}
                rowsPerPage={rowsPerPage}
                page={page}
                handleSpecialtyClick={handleSpecialtyClick}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                handleChangePage={handleChangePage}
              />
            ) : (
              <TableAllCoaches
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
        </TableContainer> */}
      </Box>
    </Container>
  );
};

export default Coaches;
