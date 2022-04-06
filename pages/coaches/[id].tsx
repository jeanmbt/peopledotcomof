import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { ADD_SPECIALTY } from "../../graphql/addSpecialty";
import {
  Container,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  FormGroup,
  Alert,
} from "@mui/material";
import { GET_COACH } from "../../graphql/getCoach";
import { Loading } from "../../components/Loading";
import { NextPage } from "next";
import React from "react";
import { StyledCoachTableCell, TableHeaderCell } from "../../styles/Table/Table.styles";
import { ICoach } from "../../types/coach";
import { Error } from "../../components/Error";

const Coach: NextPage = () => {
  const router = useRouter();
  const [mutationError, setMutationError] = React.useState(null);
  const [specialty, setSpecialty] = React.useState("");
  const [clicked, setClicked] = React.useState(false);
  const id = parseInt(useRouter().query.id as string);

  let variables: object = null;
  let coach: ICoach = null;

  id ? (
    (variables = {
      where: {
        id: {
          equals: id,
        },
      },
    })
  ) : (
    <Loading />
  );

  const [addSpecialty] = useMutation(ADD_SPECIALTY, {
    onError: (err) => {
      setMutationError(err);
    },
  });

  const handleChange = (event) => {
    setSpecialty(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (specialty !== "") {
      try {
        await addSpecialty({
          variables: {
            data: {
              specialties: {
                create: [
                  {
                    name: specialty,
                  },
                ],
              },
            },
            where: { id: id },
          },
        });
        setClicked(!clicked);
        setSpecialty("");
      } catch (error) {
        setMutationError(error);
      }
    }
    setClicked(!clicked);
  };

  const { data, loading, error } = useQuery(GET_COACH, { variables });

  if (loading) return <Loading />;

  if (data) {
    coach = data.findFirstCoach;
  }

  if (coach)
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
            width: [400, 500, 500],
          }}
        >
          <Button sx={{ margin: "0.5em 0" }} variant="outlined" onClick={() => router.back()}>
            back
          </Button>

          <TableContainer component={Paper}>
            <Table aria-label="simple table" size="small">
              <TableHead sx={{ display: "none" }}>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow sx={{ fontSize: 50 }}>
                  <TableHeaderCell>Name:</TableHeaderCell>
                  <TableHeaderCell sx={{ fontSize: 15, fontWeight: "500 !important" }}>
                    {coach.name}
                  </TableHeaderCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}> Specialties:</TableCell>
                  <TableCell sx={{ padding: [2, 1, 1], width: 1 }}>
                    <Box>
                      {coach.specialties &&
                        coach.specialties.map((specialty) => (
                          <Button
                            key={specialty.id + coach.id + Math.floor(Math.random() * 999999)}
                            sx={{ margin: "0 0.5em", minWidth: "6em" }}
                          >
                            {specialty.name}
                          </Button>
                        ))}
                    </Box>
                    <Box
                      sx={{
                        height: [1, 1, 60],
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-end",
                      }}
                    >
                      {!clicked ? (
                        <Button
                          sx={{ margin: "1em 0" }}
                          variant="contained"
                          size="small"
                          onClick={() => {
                            setClicked(!clicked);
                          }}
                        >
                          Add specialty
                        </Button>
                      ) : (
                        <FormGroup
                          onSubmit={handleSubmit}
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            margin: 0,
                            padding: 0,
                          }}
                        >
                          <TextField
                            sx={{ width: [1, 1, 300], margin: "1em 0" }}
                            id="specialty"
                            label="Specialty"
                            variant="outlined"
                            size="small"
                            value={specialty}
                            onChange={handleChange}
                          ></TextField>
                          <Button
                            sx={{
                              margin: "0 0 1em 0",
                              height: [50, 1, 38],
                              width: [1, 228, 10],
                              marginY: [0, 0, 1.89],
                              marginX: [0, 0, 0.5],
                            }}
                            type="submit"
                            variant="contained"
                            size="small"
                            onClick={handleSubmit}
                          >
                            Add
                          </Button>
                        </FormGroup>
                      )}
                    </Box>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <StyledCoachTableCell sx={{ fontWeight: "bold" }}>Email:</StyledCoachTableCell>
                  <StyledCoachTableCell>{coach.email}</StyledCoachTableCell>
                </TableRow>
                <TableRow>
                  <StyledCoachTableCell sx={{ fontWeight: "bold" }}>Phone:</StyledCoachTableCell>
                  <StyledCoachTableCell>{coach.phone}</StyledCoachTableCell>
                </TableRow>

                {coach.website && (
                  <TableRow>
                    <StyledCoachTableCell sx={{ fontWeight: "bold" }}>
                      Website:
                    </StyledCoachTableCell>
                    <StyledCoachTableCell>{coach.website}</StyledCoachTableCell>
                  </TableRow>
                )}
                <TableRow>
                  <StyledCoachTableCell sx={{ fontWeight: "bold" }}>Adress:</StyledCoachTableCell>
                  <StyledCoachTableCell>
                    {coach.street} {coach.streetNumber}, {coach.zip}   {coach.city}
                  </StyledCoachTableCell>
                </TableRow>

                {(coach.posts.length as number) !== 0 && (
                  <TableRow>
                    <StyledCoachTableCell sx={{ fontWeight: "bold" }}>Posts:</StyledCoachTableCell>
                    <StyledCoachTableCell>
                      {coach.posts.map((post) => (
                        <Button
                          sx={{ margin: "0", minWidth: "6em" }}
                          key={`${post.title}${coach.name}`}
                        >
                          {post.title}
                        </Button>
                      ))}
                    </StyledCoachTableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          {mutationError && (
            <Alert sx={{ overflowWrap: "anywhere" }} severity="error">
              Error: {mutationError.message}
            </Alert>
          )}
        </Box>
      </Container>
    );
  if (error || !coach) {
    return <Error error={error} />;
  }
};

export default Coach;
