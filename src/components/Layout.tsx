import {
  ChakraProvider,
  ColorModeScript,
  CSSReset,
  Flex,
} from "@chakra-ui/react";
import { theme } from "../theme";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
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
