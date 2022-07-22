import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { flashless } from "chakra-ui-flashless";

export const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme(
  flashless({
    config,
  })
);
