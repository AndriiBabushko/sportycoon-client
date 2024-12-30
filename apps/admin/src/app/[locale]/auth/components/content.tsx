"use client";

import type { JSX } from "react";
import { useRouter } from "next/navigation";
import { Box, HStack, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Paragraph, Heading, AdminPages, Button } from "@sportycoon/ui";

export default function Content(): JSX.Element {
  const router = useRouter();

  const handleRedirect = (page: string): void => {
    router.push(page);
  };

  return (
    <Box
      alignItems="center"
      bg="gray.100"
      display="flex"
      justifyContent="center"
      minHeight="100vh"
      p={5}
    >
      <VStack
        align="center"
        bg="white"
        borderRadius="md"
        boxShadow="lg"
        maxW="lg"
        p={8}
        width="100%"
      >
        <Heading as="h1" headingVariant="nicoMojiBold">
          Account Authentication
        </Heading>
        <Paragraph color="gray.600">
          Choose your preferred authentication method:
        </Paragraph>

        <HStack justify="center" width="100%">
          <Link href={AdminPages.LOGIN}>
            <Button buttonStyle="primary">Login</Button>
          </Link>
          <Link href={AdminPages.REGISTER}>
            <Button buttonStyle="primary">Register</Button>
          </Link>
        </HStack>

        <Paragraph color="gray.500">
          Or authenticate with third-party services:
        </Paragraph>

        <HStack justify="center" width="100%">
          <Button
            buttonStyle="primary"
            onClick={() => {
              handleRedirect("/auth/spotify");
            }}
          >
            Spotify
          </Button>
          <Button
            buttonStyle="primary"
            onClick={() => {
              handleRedirect("/auth/google");
            }}
          >
            Google
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}
