"use client";

import type { JSX } from "react";
import { useRouter } from "next/navigation";
import { Box, HStack, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Paragraph, Heading, AdminPages, Button } from "@sportycoon/ui";

export default function Content(): JSX.Element {
  const router = useRouter();

  const handleRedirect = (page: string): void => {
    router.replace(page);
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
            <Button variant="primary">Login</Button>
          </Link>
          <Link href={AdminPages.REGISTER}>
            <Button variant="primary">Register</Button>
          </Link>
        </HStack>

        <Paragraph color="gray.500">
          Or authenticate with third-party services:
        </Paragraph>

        <HStack justify="center" width="100%">
          <Button
            onClick={() => {
              handleRedirect(
                `${process.env.NEXT_PUBLIC_SPORTYCOON_API_URL}/auth/spotify`
              );
            }}
            variant="primary"
          >
            Spotify
          </Button>
          <Button
            onClick={() => {
              handleRedirect(
                `${process.env.NEXT_PUBLIC_SPORTYCOON_API_URL}/auth/google`
              );
            }}
            variant="primary"
          >
            Google
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}
