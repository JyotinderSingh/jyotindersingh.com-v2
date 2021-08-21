import {
  Box,
  Text,
  Heading,
  useBreakpointValue,
  Button,
  LinkOverlay,
} from "@chakra-ui/react";
import React from "react";
import { green, lightestSlate, slate } from "../../colors";
import styles from "./TitleSection.module.css";

const TitleSection: React.FC = () => {
  const headingSize = useBreakpointValue({
    base: "2.2rem",
    sm: "3rem",
    md: "4rem",
    lg: "5rem",
  });

  const headingPadding = useBreakpointValue({
    base: 2,
    sm: 2,
    md: 10,
  });

  const descriptionWidth = useBreakpointValue({
    base: "90%",
    sm: "75%",
    lg: "45%",
  });

  const descriptionFontSize = useBreakpointValue({
    base: "small",
    sm: "md",
    md: "lg",
  });
  return (
    <Box
      display="grid"
      mt="4.5rem"
      paddingLeft={10}
      className={styles.container}
    >
      <Box
        paddingLeft={headingPadding}
        paddingRight={headingPadding}
        mt="auto"
        mb="auto"
      >
        <Text fontFamily="roboto mono" fontSize="md" color={green}>
          Hi, my name is
        </Text>
        <Heading
          fontSize={headingSize}
          fontWeight="bold"
          color={lightestSlate}
          mt={2}
        >
          Jyotinder Singh.
        </Heading>
        <Heading fontSize={headingSize} fontWeight="bold" color={slate}>
          I build things for the web.
        </Heading>
        <Text
          mt={6}
          fontSize={descriptionFontSize}
          color={slate}
          width={descriptionWidth}
        >
          I'm a software engineer from India who loves
          to build stuff that interacts with data and the internet.
        </Text>
        <Text
          fontSize={descriptionFontSize}
          color={slate}
          width={descriptionWidth}
        >
          Currently I'm an engineer at{" "}
          <span
            className={styles.underline}
            style={{ color: green, cursor: "ne-resize" }}
          >
            Cloudera
          </span>
          &nbsp;playing with distributed systems.
        </Text>
        <Button
          mt="4rem"
          size="lg"
          variant="outline"
          borderColor={green}
          color={green}
          fontFamily="roboto mono"
          fontSize="sm"
        >
          <LinkOverlay
            href="mailto:jyotindrsingh@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Get in Touch
          </LinkOverlay>
        </Button>
      </Box>
    </Box>
  );
};

export default TitleSection;
