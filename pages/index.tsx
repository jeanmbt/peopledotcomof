import type { NextPage } from "next";
import { Box, Button, Container, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>PeopleDotCom</title>
        <meta name="description" content="Find people doing people things" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              height: "55vh",
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
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
