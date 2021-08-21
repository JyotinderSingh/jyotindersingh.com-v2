import React from "react";
import {
  Box,
  Flex,
  ListItem,
  List,
  ListIcon,
  Text,
  useBreakpointValue,
  Spacer,
} from "@chakra-ui/react";
import SectionTitle from "../SectionTitle";
import styles from "./AboutMe.module.css";
import { BiShapeTriangle } from "react-icons/bi";
import { green, slate } from "../../colors";
import personalImage from "../../assets/transparent_about_resized.png";

const AboutMe: React.FC = () => {
  const fontSizeBreakpoints = useBreakpointValue({
    base: "sm",
    sm: "md",
    md: "lg",
  });

  return (
    <Box display="grid" id="about" pb={8} mt={2}>
      <SectionTitle serialNo={1} title="About Me" />
      <Box className={styles.container} mt={4}>
        <Box className={styles.about} fontSize={fontSizeBreakpoints}>
          <Text color={slate}>
            Hi, my name is Jyotinder and I'm a software engineer based in India
            🇮🇳
          </Text>
          <Text color={slate}>
            I spend my time building beautiful products, learning new tech,
            clicking photographs, and making{" "}
            <span style={{ color: green }}>
              <a
                href="https://youtube.com/c/JyotinderSingh"
                target="_blank"
                rel="noreferrer"
                style={{ cursor: "ne-resize" }}
                className={styles.underline}
              >
                YouTube videos
              </a>
            </span>
            .
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
          <Text color={slate} mt={2}>
            Here are a few technologies I've been working with recently:
          </Text>
          <Flex
            justifyContent="space-around"
            fontSize="md"
            mt={3}
            color={slate}
          >
            <List spacing={2}>
              <ListItem>
                <ListIcon as={BiShapeTriangle} color={green} fontSize="md" />
                TypeScript
              </ListItem>
              <ListItem>
                <ListIcon as={BiShapeTriangle} color={green} fontSize="md" />
                Node.JS
              </ListItem>
              <ListItem>
                <ListIcon as={BiShapeTriangle} color={green} fontSize="md" />
                React
              </ListItem>
              <ListItem>
                <ListIcon as={BiShapeTriangle} color={green} fontSize="md" />
                Docker
              </ListItem>
            </List>
            <Spacer maxW="5rem" />
            <List spacing={2}>
              <ListItem>
                <ListIcon as={BiShapeTriangle} color={green} fontSize="md" />
                Kubernetes
              </ListItem>
              <ListItem>
                <ListIcon as={BiShapeTriangle} color={green} fontSize="md" />
                Python
              </ListItem>
              <ListItem>
                <ListIcon as={BiShapeTriangle} color={green} fontSize="md" />
                Java
              </ListItem>
              <ListItem>
                <ListIcon as={BiShapeTriangle} color={green} fontSize="md" />
                Chakra UI
              </ListItem>
            </List>
            <Spacer />
          </Flex>
        </Box>
        <Box className={styles.picture}>
          <img src={personalImage} alt="headshot" />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
