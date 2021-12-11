import { Box, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { MovieResult } from "../../../pages";
import { AiOutlineLike } from "react-icons/ai";
const ResultItem = ({
  overview,
  title,
  original_title,
  vote_count,
  release_date,
  backdrop_path,
  poster_path,
}: MovieResult) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const imageSource = backdrop_path ?? poster_path;

  // const dateSplitbyBullet = release_date?.replaceAll("-", "\u2022") ?? "";
  return (
    <VStack
      as="li"
      key={title}
      role="group"
      _hover={{ transform: "scale(1.1)" }}
      transition=".2s ease-in-out"
    >
      <Box w="full">
        <Image
          layout="responsive"
          src={imageSource === null ? "" : `${BASE_URL}${imageSource}`}
          width="1920"
          height="1080"
        />
      </Box>
      <VStack align="flex-start" spacing={1}>
        <Text noOfLines={1}>{overview}</Text>
        <Heading
          as="h2"
          fontSize="xl"
          mt="4"
          fontWeight="semi-bold"
          _groupHover={{ fontWeight: "bold" }}
          transition=".2s ease-in-out"
        >
          {title ?? original_title}
        </Heading>
        <HStack
          color="gray.200"
          fontSize="sm"
          opacity={[1, null, 0]}
          _groupHover={{ opacity: "1" }}
          transition=".2s ease-in-out"
        >
          <Text>{release_date ?? ""}</Text>
          <HStack>
            <Icon as={AiOutlineLike} />
            <Text>{vote_count ?? 0}</Text>
          </HStack>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default ResultItem;
