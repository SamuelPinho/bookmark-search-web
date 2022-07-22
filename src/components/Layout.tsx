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
  const { setColorMode, colorMode } = useColorMode();
  console.log({ colorMode });

  useEffect(() => {
    console.log({ colorMode });
    if (colorMode === "light") {
      setColorMode("dark");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorMode]);

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
