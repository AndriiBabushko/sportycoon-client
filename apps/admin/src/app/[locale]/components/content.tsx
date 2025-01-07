"use client";

import type { JSX } from "react";
import { Box, Flex, Image, useColorModeValue } from "@chakra-ui/react";
import { Paragraph, Heading, Button } from "@sportycoon/ui";
import { TRANSLATES_NAMESPACES, useTranslations } from "@sportycoon/locales";

export default function Content(): JSX.Element {
  const translateHOME = useTranslations(TRANSLATES_NAMESPACES.HOME);
  const bg = useColorModeValue("gray.200", "gray.900");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const featureBg = useColorModeValue("white", "gray.700");
  const aboutBg = useColorModeValue("gray.200", "gray.800");

  return (
    <Box bg={bg} borderRadius={8} color={textColor} minH="100vh" p={8}>
      <Flex
        align="center"
        className="mb-16"
        direction={{ base: "column", md: "row" }}
        gap={8}
        justify="center"
      >
        <Box flex="1" textAlign={{ base: "center", md: "left" }}>
          <Heading as="h2" className="mb-4" variant="montserratBold">
            {translateHOME("HERO.TITLE")}
          </Heading>
          <Paragraph className="mb-8" variant="montserrat">
            {translateHOME("HERO.DESCRIPTION")}
          </Paragraph>
          <Button size="lg" variant="primary">
            {translateHOME("HERO.BUTTON")}
          </Button>
        </Box>
        <Image
          alt={translateHOME("HERO.IMAGE_ALT")}
          borderRadius="md"
          className="md:mt-0"
          maxH="400px"
          objectFit="cover"
          src="/images/moodboard.png"
          width={{ base: "100%", md: "50%" }}
        />
      </Flex>

      <Box bg={featureBg} borderRadius="md" className="mb-16 p-6">
        <Heading as="h2" className="mb-4" variant="montserratBold">
          {translateHOME("FEATURES.TITLE")}
        </Heading>
        <Paragraph variant="montserrat">
          {translateHOME("FEATURES.FEATURE_1")}
        </Paragraph>
        <Paragraph variant="montserrat">
          {translateHOME("FEATURES.FEATURE_2")}
        </Paragraph>
        <Paragraph variant="montserrat">
          {translateHOME("FEATURES.FEATURE_3")}
        </Paragraph>
        <Paragraph variant="montserrat">
          {translateHOME("FEATURES.FEATURE_4")}
        </Paragraph>
      </Box>

      <Flex
        align="center"
        bg={aboutBg}
        borderRadius="md"
        className="mb-16"
        color={textColor}
        direction={{ base: "column", md: "row" }}
        gap={8}
        p={8}
      >
        <Box className="mb-8 md:mb-0" flex="1">
          <Heading as="h2" className="mb-4" variant="montserratBold">
            {translateHOME("ABOUT.TITLE")}
          </Heading>
          <Paragraph variant="montserrat">
            {translateHOME("ABOUT.DESCRIPTION")}
          </Paragraph>
        </Box>
        <Image
          alt={translateHOME("ABOUT.IMAGE_ALT")}
          borderRadius="md"
          objectFit="cover"
          src="/images/signboard.png"
          width={{ base: "100%", md: "50%" }}
        />
      </Flex>

      <Box textAlign="center">
        <Heading as="h2" className="mb-4" variant="montserratBold">
          {translateHOME("CONTACT.TITLE")}
        </Heading>
        <Paragraph variant="montserrat">
          {translateHOME("CONTACT.EMAIL")}
        </Paragraph>
        <Paragraph variant="montserrat">
          {translateHOME("CONTACT.PHONE")}
        </Paragraph>
        <Paragraph variant="montserrat">
          {translateHOME("CONTACT.ADDRESS")}
        </Paragraph>
      </Box>
    </Box>
  );
}
