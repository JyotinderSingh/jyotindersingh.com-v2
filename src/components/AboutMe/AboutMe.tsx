import React from "react";
import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import SectionTitle from "../SectionTitle";
import styles from "./AboutMe.module.css";
import { green, slate } from "../../colors";
import personalImage from "../../assets/transparent_about_resized.png";

const AboutMe: React.FC = () => {
  const fontSizeBreakpoints = useBreakpointValue({
    base: "sm",
    sm: "md",
    md: "lg",
  });
  return (
    <Box height="80vh" display="grid" alignContent="center">
      <Box height="50vh">
        <SectionTitle serialNo={1} title="About Me" />
        <Box className={styles.container} mt={4}>
          <Box className={styles.about} fontSize={fontSizeBreakpoints}>
            <Text color={slate}>
              Hi, my name is Jyotinder and I'm a software engineer based in
              India 🇮🇳
            </Text>
            <Text color={slate}>
              I spend my time building beautiful products, learning new tech,
              clicking photographs, or making YouTube videos.
            </Text>
            <Text color={slate} mt={5}>
              I usually build stuff with <strong>React</strong>,{" "}
              <strong>Node.JS</strong>, <strong>TypeScript</strong>, and{" "}
              <strong>Python</strong>.
            </Text>

            <Text color={slate}>
              I'm currently working on building developer tools and end to end
              solutions at{" "}
              <span style={{ color: green }}>
                <a
                  href="https://www.cloudera.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ cursor: "ne-resize" }}
                  className={styles.underline}
                >
                  Cloudera
                </a>
              </span>
              .
            </Text>
          </Box>
          <Box className={styles.picture}>
            <img src={personalImage} alt="headshot"></img>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
