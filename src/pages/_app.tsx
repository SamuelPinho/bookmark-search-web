// import the Head component for appending elements to the head of the page
import { ColorModeScript } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Add the favicon */}
      <Head>
        <link rel="shortcut icon" href="/captain-128.png" />
        <title>Captain Browser Extension</title>
      </Head>
      <ColorModeScript initialColorMode="dark" />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
