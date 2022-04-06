import * as React from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import Head from "next/head";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";
import { ThemeProvider, CssBaseline, StyledEngineProvider, createTheme } from "@mui/material";
import Layout from "../components/Layout";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import createEmotionCache from "../utility/createEmotionCache";
import lightThemeOptions from "../styles/theme/lightThemeOptions";
import "../styles/globals.css";
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const client = new ApolloClient({
    uri: "http://localhost:3000/graphql/api",
    cache: new InMemoryCache(),
  });
  return (
    // <StyledEngineProvider injectFirst>
    //   <CacheProvider value={emotionCache}>
    //     <ThemeProvider theme={lightTheme}>
    //       <CssBaseline />
    //       <ApolloProvider client={client}>
    //         <Head>
    //           <link
    //             rel="icon"
    //             href="https://pimage.sport-thieme.de/icon32/springer"
    //             type="image/png"
    //           />
    //           <Component {...pageProps} />
    //         </Head>
    //         <Layout>
    //           <Component layout="fill" {...pageProps} />
    //         </Layout>
    //       </ApolloProvider>
    //     </ThemeProvider>
    //   </CacheProvider>
    // </StyledEngineProvider>
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
