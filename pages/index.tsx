import type { NextPage } from "next";
import { Box, Button, Container, Typography, Paper } from "@mui/material";
import Head from "next/head";
import Image from "next/image";

import { Fragment } from "react";
import { addApolloState, initializeApollo } from "../lib/apollo";
import { gql } from "@apollo/client";

const Home: NextPage = () => {
  return (
    <Container sx={{ paddingY: 2 }}>
      <Box
        component={Paper}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",

          height: "80vh",
        }}
        paddingY={5}
      >
        <Typography
          sx={{ marginBottom: 5, textAlign: "center", fontSize: [50, 30] }}
          variant="h5"
          gutterBottom
        >
          We help you find People, doing people things.
        </Typography>
        <Button
          sx={{ width: [250], height: [100, 60], fontSize: 20 }}
          variant="contained"
          href="/people"
        >
          See all People
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
