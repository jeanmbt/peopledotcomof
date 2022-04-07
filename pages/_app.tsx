import "../styles/globals.css";
import type { AppProps } from "next/app";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";
import Layout from "../components/Layout";

import theme from "../styles/theme/lightThemeOptions";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../utils/createEmotionCache";
import Head from "next/head";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
  const client = new ApolloClient({
    uri: "/api",
    cache: new InMemoryCache(),
  });

  return (
    <StyledEngineProvider injectFirst>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <Head>
              <title>PeopleDotCom</title>
            </Head>
            <Layout theme={theme}>
              <Component layout="fill" {...pageProps} />
            </Layout>
          </ApolloProvider>
        </ThemeProvider>
      </CacheProvider>
    </StyledEngineProvider>
  );
}

export default MyApp;
