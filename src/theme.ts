import { extendTheme, ThemeConfig } from "@chakra-ui/react";

export const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme(config);
