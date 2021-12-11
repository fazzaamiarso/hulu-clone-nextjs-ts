import { Box, HStack, Spacer, Stack } from "@chakra-ui/react";
import Image from "next/image";
import HeadItem from "./HeadItem";
import {
  AiOutlineCheckCircle,
  AiOutlineHome,
  AiOutlineInbox,
  AiOutlineSearch,
  AiOutlineThunderbolt,
  AiOutlineUser,
} from "react-icons/ai";

const Header = () => {
  return (
    <Stack
      as="header"
      flexDir={["column", null, "row"]}
      align="center"
      w="90%"
      mx="auto"
    >
      <Box as="nav" pt="6">
        <HStack as="ul" spacing={[-4, 4]}>
          <HeadItem icon={AiOutlineHome} title="HOME" key="home" />
          <HeadItem
            icon={AiOutlineThunderbolt}
            title="TRENDING"
            key="TRENDING"
          />
          <HeadItem
            icon={AiOutlineCheckCircle}
            title="VERIFIED"
            key="VERIFIED"
          />
          <HeadItem
            icon={AiOutlineInbox}
            title="COLLECTIONS"
            key="COLLECTIONS"
          />
          <HeadItem icon={AiOutlineSearch} title="SEARCH" key="SEARCH" />
          <HeadItem icon={AiOutlineUser} title="ACCOUNT" key="ACCOUNT" />
        </HStack>
      </Box>
      <Spacer />
      <Box>
        <Image src="https://links.papareact.com/ua6" width={150} height={75} />
      </Box>
    </Stack>
  );
};

export default Header;
