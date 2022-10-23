import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <Box
      display="grid"
      justifyContent="center"
      alignItems="end"
      paddingBottom={8}
      height="4rem"
    >
      <Flex
        fontFamily="roboto mono"
        fontSize="xs"
        justifyContent="center"
        alignItems="baseline"
        mb={2}
      >
        <Text>Design by Brittany Chiang</Text>
      </Flex>
      <Flex
        fontFamily="roboto mono"
        fontSize="xs"
        justifyContent="center"
        alignItems="baseline"
      >
        <Text>Built with{""}</Text>
        <Box ml={2} transform="translateY(2px)" color="pink.500">
          <FaHeart display="inline block" />
        </Box>
        <Text ml={2}> by Jyotinder Singh</Text>
      </Flex>
    </Box>
  );
};
