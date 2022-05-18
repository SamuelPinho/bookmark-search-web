import { Flex, Text, Image, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import ImageNext from "next/image";
import { Icon } from "@iconify/react";
import { Layout } from "../components/Layout";
import { BoltIcon } from "../icons/Bolt";
import { KeycapIcon } from "../icons/Keycap";

const Home: NextPage = () => {
  return (
    <Layout>
      <Flex
        w="full"
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir="row"
      >
        <Flex
          flexDir={"column"}
          w="50%"
          alignItems={"center"}
          height="full"
          justifyContent={"center"}
        >
          <Text fontWeight={"bold"} fontSize="4xl">
            Superpower your browser
          </Text>
          <Text
            maxW={"500px"}
            textAlign="center"
            fontSize={"xl"}
            textColor="gray.400"
          >
            A browser extension that allows fast searcing of bookmarks, history
            and much more
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
        <Flex
          bg="gray.900"
          h="full"
          w="50%"
          flexDir={"row"}
          alignItems="center"
          justifyContent={"center"}
          columnGap={36}
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
        </Flex>
      </Flex>
    </Layout>
  );
};

interface PerkBoxProps {
  title: string;
  description: string;
  icon: "bolt" | "keycap";
}

const PerkBox = ({ title, description, icon }: PerkBoxProps) => {
  const Icon = icon === "bolt" ? BoltIcon : KeycapIcon;

  return (
    <VStack alignItems="center" maxW={"250px"} textAlign="center">
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
      <Text>{description}</Text>
    </VStack>
  );
};

export default Home;
