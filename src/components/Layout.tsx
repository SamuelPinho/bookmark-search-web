import {
  ChakraProvider,
  ColorModeProvider,
  ColorModeScript,
  CSSReset,
  DarkMode,
  extendTheme,
  Flex,
  Text,
  ThemeConfig,
} from "@chakra-ui/react";
import { ParallaxProvider } from "react-scroll-parallax";

interface LayoutProps {
  children: React.ReactNode;
}

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
});

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <ColorModeScript initialColorMode={theme.initialColorMode} />
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Flex flexDir="column" minH="100vh" bg="#151d29">
          <main>
            <Flex flex="1">
              <Flex w="full" h="100vh">
                {children}
              </Flex>
            </Flex>
          </main>
        </Flex>
      </ChakraProvider>
    </>
  );
};
