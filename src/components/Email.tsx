import React from "react";
import { LinkOverlay, Text } from "@chakra-ui/react";
import { green, slate } from "../colors";

const Email: React.FC = () => {
  return (
    <>
      <Text
        position="fixed"
        cursor="pointer"
        right="1rem"
        bottom="0"
        transform="rotate(90deg) translateX(-14rem) translateY(-3rem)"
        fontSize="sm"
        fontWeight="light"
        color={slate}
        letterSpacing={1}
        transition="all 0.3s ease"
        fontFamily="roboto mono"
        _hover={{
          transform: "rotate(90deg) translateX(-14.2rem) translateY(-3rem)",
          color: green,
        }}
      >
        <LinkOverlay href="mailto:jyotindrsingh@gmail.com" target="_blank">
          jyotindrsingh@gmail.com
        </LinkOverlay>
      </Text>
      <div
        style={{
          borderLeft: `1px solid ${slate}`,
          height: "6.2rem",
          position: "fixed",
          right: "4.8rem",
          bottom: "0",
        }}
      ></div>
    </>
  );
};

export default Email;
