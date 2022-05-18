import {
  ChakraProvider,
  CSSReset,
  extendTheme,
  Flex,
  Text,
} from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode;
}

const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: "gray.50",
      },
    },
  },
});

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Flex bgColor={"gray.800"} flexDir="column" minH="100vh">
        <main>
          <Flex flex="1">
            <Flex w="full" h="100vh">
              {children}
            </Flex>
          </Flex>
        </main>
      </Flex>
    </ChakraProvider>
  );
};
