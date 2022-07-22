// import the Head component for appending elements to the head of the page
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import { Chakra } from "../ChakraWrapper";
import { theme } from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Add the favicon */}
      <Head>
        <link rel="shortcut icon" href="/captain-128.png" />
        <title>Captain Browser Extension</title>
      </Head>
      <ColorModeScript initialColorMode={"dark"} />

      <Chakra cookies={pageProps.cookies}>
        <ColorModeScript initialColorMode={"dark"} />
        <ChakraProvider theme={theme}>
          {mounted && <Component {...pageProps} />}
        </ChakraProvider>
      </Chakra>
    </>
  );
}

export { getServerSideProps } from "../ChakraWrapper";
export default MyApp;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
