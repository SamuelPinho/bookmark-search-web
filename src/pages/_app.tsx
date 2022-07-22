// import the Head component for appending elements to the head of the page
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

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
