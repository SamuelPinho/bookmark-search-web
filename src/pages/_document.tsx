// pages/_document.js

import { ColorModeScript } from "@chakra-ui/react";
import { FlashlessScript } from "chakra-ui-flashless";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { theme } from "../theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en" data-theme="dark">
        <Head />
        <body>
          {/* 👇 Here's the script */}
          <FlashlessScript theme={theme} />
          <ColorModeScript initialColorMode={"dark"} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
