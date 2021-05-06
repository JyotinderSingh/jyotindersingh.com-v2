import React from "react";
import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { green, slate } from "../colors";

interface SectionTitleProps {
  serialNo: Number;
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ serialNo, title }) => {
  const fontSizeBreakpoints = useBreakpointValue({
    base: "lg",
    sm: "2xl",
    md: "3xl",
  });
  return (
    <Box
      height="4rem"
      // bg="teal.900"
      display="flex"
      flexDir="column"
      justifyContent="center"
      fontSize={fontSizeBreakpoints}
      maxW="100%"
    >
      <Flex>
        <Text fontWeight="bold">
          <Text
            display="inline-block"
            fontWeight="light"
            fontFamily="roboto mono"
            fontSize="0.8em"
            color={green}
          >{`0${serialNo}${String.fromCharCode(46)}`}</Text>
          <Box width="0.6re" display="inline-flex" />
          {title}
        </Text>
        <Box
          style={{
            marginLeft: "1.5rem",
            borderBottom: `1px solid ${slate}`,
            width: "50%",
            marginBottom: "0.6em",
          }}
        />
      </Flex>
    </Box>
  );
};

export default SectionTitle;
