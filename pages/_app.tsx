import "../styles/globals.css";
import type { AppProps } from "next/app";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import Head from "next/head";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";
import Layout from "../components/Layout";

import theme from "../styles/theme/lightThemeOptions";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://localhost:3000/api",
    cache: new InMemoryCache(),
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <Head>
            <link
              rel="icon"
              href="https://pimage.sport-thieme.de/icon32/springer"
              type="image/png"
            />
          </Head>
          <Layout>
            <Component layout="fill" {...pageProps} />
          </Layout>
        </ApolloProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default MyApp;
