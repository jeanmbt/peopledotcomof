import type { NextPage } from "next";
import { Box, Button, Container, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";

import { Fragment } from "react";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Container>
        <Box
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
            All People
          </Button>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Home;
