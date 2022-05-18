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
        {/* <nav>
          <Flex
            pos={"sticky"}
            top="0"
            w="100%"
            bgColor={"gray.700"}
            px={4}
            py={1}
            zIndex={"docked"}
            shadow={"base"}
            alignItems="center"
          >
            <Text as="h2" fontWeight={"bold"} fontSize="xl">
              Bookmark search
            </Text>
          </Flex>
        </nav> */}
        <main>
          <Flex flex="1">
            <Flex py="10" px="6" w="full" h="100vh">
              {children}
            </Flex>
          </Flex>
        </main>
      </Flex>
    </ChakraProvider>
  );
};
