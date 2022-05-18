import { Flex, Text, Image, VStack, FlexProps } from "@chakra-ui/react";
import type { NextPage } from "next";
import ImageNext from "next/image";
import { Icon } from "@iconify/react";
import { Layout } from "../components/Layout";
import { BoltIcon } from "../icons/Bolt";
import { KeycapIcon } from "../icons/Keycap";
import { BrowserIcon } from "../icons/Browser";
import { ConfigIcon } from "../icons/Config";

const Home: NextPage = () => {
  return (
    <Layout>
      <Flex
        w="full"
        justifyContent={"space-between"}
        flexDir="row"
        height="max-content"
      >
        <Flex
          top="0"
          flexDir={"column"}
          w="50%"
          alignItems={"center"}
          height="100vh"
          justifyContent={"center"}
          pos="sticky"
          left="0"
          bgColor={"gray.800"}
        >
          <Text fontWeight={"bold"} fontSize="4xl" textAlign={"center"}>
            Superpower your browser
          </Text>
          <Image
            src="/demo.gif"
            alt="demo app"
            width={629}
            height={461}
            borderRadius="lg"
            boxShadow={"base"}
            mt="16"
          />
        </Flex>
        <Flex w="50%" flexDir={"column"} pos="sticky" left="50%" top="0">
          <ScrollRightSection alignItems={"center"} justifyContent="center">
            <Text
              maxW={"500px"}
              textAlign="center"
              fontSize={"2xl"}
              textColor="gray.200"
            >
              A browser extension that allows fast searcing of bookmarks,
              history and much more
            </Text>
          </ScrollRightSection>
          <ScrollRightSection>
            <Flex
              flexDir={"row"}
              alignItems="center"
              justifyContent={"center"}
              flexWrap="wrap"
              columnGap={16}
              rowGap="16"
            >
              <PerkBox
                title="Fast Search"
                description="No more lost and forgotten bookmarks. Go back to visited pages quickly"
                icon="bolt"
              />
              <PerkBox
                title="Shortcut Powered"
                description="No need to click anywhere. You can do anything with some simple keyboard shortcuts"
                icon="keycap"
              />
              <PerkBox
                title="Browser Commands"
                description="Quick access to some of the most useful browser commands"
                icon="browser"
              />
              <PerkBox
                title="Fully Customizable"
                description="You can change the search, shortcuts, commands, colors and much more"
                icon="config"
              />
            </Flex>
          </ScrollRightSection>
        </Flex>
      </Flex>
    </Layout>
  );
};

const ScrollRightSection = ({ children, ...flexProps }: FlexProps) => {
  return (
    <Flex bg="gray.900" h="100vh" pos="sticky" {...flexProps}>
      {children}
    </Flex>
  );
};

interface PerkBoxProps {
  title: string;
  description: string;
  icon: "bolt" | "keycap" | "browser" | "config";
}

const PerkBox = ({ title, description, icon }: PerkBoxProps) => {
  const Icon =
    icon === "bolt"
      ? BoltIcon
      : icon === "browser"
      ? BrowserIcon
      : icon === "config"
      ? ConfigIcon
      : KeycapIcon;

  return (
    <VStack
      alignItems="center"
      maxW={"250px"}
      textAlign="center"
      minH={"190px"}
    >
      <Icon
        w={"64px"}
        h={"64px"}
        border={"1px"}
        borderColor={"gray.600"}
        borderRadius="lg"
        p={2}
      />
      <Text fontWeight={"bold"} fontSize="xl">
        {title}
      </Text>
      <Text color="gray.400">{description}</Text>
    </VStack>
  );
};

export default Home;
