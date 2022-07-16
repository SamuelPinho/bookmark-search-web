import {
  Button,
  Fade,
  Flex,
  FlexProps,
  HStack,
  Icon as ChakraIcon,
  IconButton,
  Image,
  Text,
  theme,
  VStack,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import type { NextPage } from "next";
import React, { useEffect } from "react";
import { useRef } from "react";
import {
  FaCaretDown,
  FaGithub,
  FaHeart,
  FaLinkedinIn,
  FaSortDown,
} from "react-icons/fa";
import { Layout } from "../components/Layout";
import { useIntersection } from "../hooks";
import { BoltIcon } from "../icons/Bolt";
import { BrowserIcon } from "../icons/Browser";
import { ConfigIcon } from "../icons/Config";
import { KeycapIcon } from "../icons/Keycap";

type SectionNames = "first" | "second" | "third";

const Home: NextPage = () => {
  const firstSectionRef = useRef<HTMLDivElement>(null);
  const secondSectionRef = useRef<HTMLDivElement>(null);
  const thirdSectionRef = useRef<HTMLDivElement>(null);
  const getTheExtensionButtonRef = useRef<HTMLButtonElement>(null);

  const isGetTheExtestionButtonInTheViewport = useIntersection(
    getTheExtensionButtonRef
  );

  const handleGoToSection = (section: "first" | "second" | "third") => {
    const sectionRef =
      section === "first"
        ? firstSectionRef
        : section === "second"
        ? secondSectionRef
        : thirdSectionRef;

    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        >
          <Text fontWeight={"bold"} fontSize="4xl" textAlign={"center"}>
            Superpower your browser with Lightning🔥
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
          <Fade in={!isGetTheExtestionButtonInTheViewport}>
            <Button
              variant={"outline"}
              colorScheme={"gray"}
              mt="16"
              onClick={() => {
                window.open(
                  "https://chrome.google.com/webstore/detail/pgcnmimojiemmlcppfejoacdakfmeoan",
                  "_blank"
                );
              }}
              leftIcon={<Icon icon="heroicons-outline:external-link" />}
            >
              Get the extension here
            </Button>
          </Fade>
        </Flex>
        <Flex
          w="50%"
          flexDir={"column"}
          pos="sticky"
          left="50%"
          top="0"
          scrollBehavior={"smooth"}
        >
          <ScrollRightSection
            alignItems={"center"}
            justifyContent="center"
            ref={firstSectionRef}
            handleGoDown={() => handleGoToSection("second")}
          >
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
          <ScrollRightSection
            ref={secondSectionRef}
            handleGoDown={() => handleGoToSection("third")}
          >
            <Flex flexDir={"row"} alignItems="center" justifyContent={"center"}>
              <Flex
                flexDir={"row"}
                justifyContent="center"
                alignItems={"center"}
                gap="16"
                flexWrap={"wrap"}
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
            </Flex>
          </ScrollRightSection>
          <ScrollRightSection
            justifyContent={"center"}
            alignItems="center"
            flexDir={"column"}
            rowGap="12"
            ref={thirdSectionRef}
          >
            <Button
              variant={"outline"}
              colorScheme={"gray"}
              mt="16"
              onClick={() => {
                window.open(
                  "https://chrome.google.com/webstore/detail/pgcnmimojiemmlcppfejoacdakfmeoan",
                  "_blank"
                );
              }}
              leftIcon={<Icon icon="heroicons-outline:external-link" />}
              ref={getTheExtensionButtonRef}
            >
              Get the extension here
            </Button>
            <Flex flexDir={"column"}>
              <Flex>
                <Text mb="2" color="gray.600">
                  Made by
                </Text>
                <Text color="gray.200">&nbsp;Samuel Monteiro</Text>
              </Flex>
              <Button
                onClick={() =>
                  window.open("https://buymeacoffee.com/samuelmonteiro")
                }
                size="sm"
                leftIcon={
                  <FaHeart color={theme.colors.red[500]} width="4" height="4" />
                }
                borderWidth="1px"
                borderColor="gray.200"
                borderRadius="md"
                bg={"gray.50"}
                color={"gray.800"}
                outline="0"
                _hover={{
                  bg: "gray.100",
                  borderColor: "gray.300",
                }}
                _active={{
                  borderColor: "gray.200",
                }}
                _focus={{
                  boxShadow: "outline",
                }}
              >
                Buy me a coffee
              </Button>
            </Flex>
            <HStack>
              <IconButton
                aria-label="Github link"
                size="sm"
                icon={<ChakraIcon as={FaGithub} />}
                onClick={() =>
                  window.open("https://github.com/SamuelPinho", "_blank")
                }
              />
              <IconButton
                aria-label="Linkedin link"
                size="sm"
                icon={<ChakraIcon as={FaLinkedinIn} />}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/samuelmpinho/?locale=en_US",
                    "_blank"
                  )
                }
              />
            </HStack>
          </ScrollRightSection>
        </Flex>
      </Flex>
    </Layout>
  );
};

interface ScrollRightSectionProps extends FlexProps {
  handleGoDown?: () => void;
}

const ScrollRightSection = React.forwardRef<
  HTMLDivElement,
  ScrollRightSectionProps
>(({ children, handleGoDown, ...flexProps }, ref) => {
  return (
    <Flex
      bg="gray.900"
      h="100vh"
      pos="sticky"
      {...flexProps}
      ref={ref}
      scrollBehavior="smooth"
    >
      {children}
      {handleGoDown && (
        <Flex
          position={"absolute"}
          bottom={6}
          margin="0 auto"
          w="100%"
          alignItems={"center"}
          justifyContent="center"
        >
          <IconButton
            aria-label="go to another section"
            variant={"outline"}
            size="sm"
            icon={<ChakraIcon as={FaCaretDown} />}
            onClick={handleGoDown}
          />
        </Flex>
      )}
    </Flex>
  );
});
ScrollRightSection.displayName = "ScrollRightSection";

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
