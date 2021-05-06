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
          <Flex alignItems="baseline" justifyContent="space-between">
            <Text
              fontWeight="light"
              fontFamily="roboto mono"
              fontSize="0.8em"
              color={green}
            >{`0${serialNo}${String.fromCharCode(46)}`}</Text>
            {title}
          </Flex>
        </Text>
        <Box
          style={{
            marginLeft: "1.5rem",
            borderBottom: `1px solid ${slate}`,
            width: "auto",
            minWidth: "25%",
            maxWidth: "50%",
            marginBottom: "0.6em",
          }}
        />
      </Flex>
    </Box>
  );
};

export default SectionTitle;
