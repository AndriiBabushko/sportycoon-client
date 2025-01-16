"use client";

import type { JSX } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { Button, Heading, Paragraph } from "@sportycoon/ui/components/common";
import { AdminPages } from "@sportycoon/ui/lib";
import Link from "next/link";

interface NotFoundContentProps {
  locale: string;
  pageNotFound: string;
  backToHome: string;
}

export default function NotFoundContent({
  locale,
  pageNotFound,
  backToHome,
}: NotFoundContentProps): JSX.Element {
  return (
    <Box
      className="flex items-center justify-center min-h-screen p-4"
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Box
        className="w-full max-w-md text-center bg-white p-8 rounded shadow-md"
        bg={useColorModeValue("white", "gray.700")}
      >
        <Heading
          as="h1"
          variant={"nicoMojiBold"}
          className={"text-[24px] mb-[16px]"}
        >
          404
        </Heading>
        <Paragraph variant={"montserratBold"} className="text-[16px] mb-[24px]">
          {pageNotFound}
        </Paragraph>

        <Link href={"/" + locale + AdminPages.ROOT} replace>
          <Button variant={"link"} size={"lg"}>
            <Paragraph
              variant={"montserrat"}
              className={`text-[16px] text-white`}
            >
              {backToHome}
            </Paragraph>
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
