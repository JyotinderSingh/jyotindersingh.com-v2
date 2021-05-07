import React from "react";
import { Box, Button, Flex, LinkOverlay, Spacer, Text } from "@chakra-ui/react";
import { green, lightestSlate, slate } from "../colors";
import useWindowDimensions from "../hooks/useWindowDimensions";

export const Contact: React.FC = () => {
  const { width: screenWidth } = useWindowDimensions();

  return (
    <Box
      display="grid"
      id="contact"
      mt={10}
      justifyContent="center"
      alignItems="center"
      height="40rem"
    >
      <Box textAlign="center">
        <Flex
          color={green}
          alignItems="baseline"
          fontSize="lg"
          fontFamily="roboto mono"
          fontWeight="normal"
        >
          <Spacer />
          <Text fontSize="0.8em">04.</Text>
          <Text ml={2}>What's Next?</Text>
          <Spacer />
        </Flex>
        <Text
          textAlign="center"
          fontSize={screenWidth > 970 ? "6xl" : "4xl"}
          fontWeight="bold"
          color={lightestSlate}
          mt="0.5rem"
        >
          Get In Touch
        </Text>
        <Text
          width={screenWidth > 970 ? "50%" : "80%"}
          textAlign="center"
          color={slate}
          ml="auto"
          mr="auto"
          mt="0.5rem"
        >
          Although I'm not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </Text>
        <Button
          mt={10}
          variant="outline"
          colorScheme="teal"
          size="lg"
          fontSize="sm"
          fontFamily="roboto mono"
        >
          <LinkOverlay
            href="mailto:jyotindrsingh@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            Say Hello
          </LinkOverlay>
        </Button>
      </Box>
    </Box>
  );
};
