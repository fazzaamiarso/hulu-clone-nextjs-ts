import { Icon, Link, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  title: string;
}

const HeadItem = ({ icon, title }: Props) => {
  return (
    <VStack as="li" role="group" _hover={{ cursor: "pointer" }}>
      <Icon
        as={icon}
        _groupHover={{ transform: "translateY(-2px)" }}
        boxSize="1.5em"
      />
      <NextLink href="#" passHref>
        <Link
          opacity="0"
          fontSize="xs"
          letterSpacing=".1ch"
          _groupHover={{ opacity: "1", textDecor: "none" }}
        >
          {title}
        </Link>
      </NextLink>
    </VStack>
  );
};

export default HeadItem;
