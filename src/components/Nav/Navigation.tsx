import { Box, Flex, HStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import requestAction from "../../../utils/requests";

const Navigation = () => {
  const requestEntries = Object.entries(requestAction);
  return (
    <Box as="nav" position="relative">
      <HStack
        as="ul"
        display="flex"
        listStyleType="none"
        flexWrap="nowrap"
        spacing="12"
        px="16"
        overflowX="scroll"
        sx={{
          "&::-webkit-scrollbar": {
            height: "5px",
          },
          "&::-webkit-scrollbar-track": {},
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "gray",
            borderRadius: "100px",
          },
        }}
      >
        {requestEntries.map(([action, { title, url }]) => {
          return (
            <Box
              as="li"
              key={action}
              flexShrink="0"
              py="2"
              _hover={{ transform: "scale(1.125)" }}
            >
              <NextLink href={`/?genre=${action}`} passHref>
                <Link fontSize="lg" _hover={{ textDecor: "none" }}>
                  {title}
                </Link>
              </NextLink>
            </Box>
          );
        })}
      </HStack>
      <Box
        position="absolute"
        top="0"
        right="0"
        height={10}
        width={1 / 12}
        bgGradient="linear(to-r, transparent, #06202A)"
      />
    </Box>
  );
};

export default Navigation;
