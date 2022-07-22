import {
  ChakraProvider,
  ColorModeScript,
  CSSReset,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { theme } from "../theme";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { toggleColorMode, colorMode } = useColorMode();
  useEffect(() => {
    if (
      localStorage.getItem("chakra-ui-color-mode") === "light" &&
      colorMode === "dark"
    ) {
      setTimeout(() => toggleColorMode(), 1500);
    } else if (
      localStorage.getItem("chakra-ui-color-mode") === "dark" &&
      colorMode === "light"
    ) {
      setTimeout(() => toggleColorMode(), 1500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
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
    </>
  );
};
