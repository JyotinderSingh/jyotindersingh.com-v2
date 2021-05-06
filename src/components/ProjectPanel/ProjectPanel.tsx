import React from "react";
import { Box, Flex, LinkOverlay, Text } from "@chakra-ui/react";

import styles from "./ProjectPanel.module.css";
import { green, lightestNavy, lightestSlate, lightSlate } from "../../colors";
import { BiGitBranch } from "react-icons/bi";

export interface ProjectPanelProps {
  title: string;
  description: string;
  technologies: string[];
  imgUrl: string;
  githubLink: string;
  index?: number;
}

export const ProjectPanel: React.FC<ProjectPanelProps> = ({
  description,
  githubLink,
  imgUrl,
  technologies,
  title,
  index,
}) => {
  const techList: JSX.Element[] = [];

  technologies.forEach((tech) =>
    techList.push(
      <Text
        color={lightestSlate}
        fontFamily="roboto mono"
        ml={2}
        mr={2}
        fontSize="sm"
        letterSpacing="1px"
        key={tech}
      >
        {tech}
      </Text>
    )
  );

  return (
    <Box width="100%" height="25rem" className={styles.container} mb="5rem">
      <Box
        className={index! % 2 === 0 ? styles.projectCard1 : styles.projectCard2}
        height="25rem"
        backgroundImage={`linear-gradient(to right bottom, rgba(100, 255, 218, 0.35), rgba(100, 255, 218, 0.35)), url(${imgUrl})`}
        backgroundSize="cover"
        // backgroundBlendMode="screen"
        backgroundPosition="center"
        transition="all 0.3s ease"
        zIndex={10}
        _hover={{
          opacity: 0,
        }}
      />
      <Box
        display="inline"
        className={index! % 2 === 0 ? styles.projectCard1 : styles.projectCard2}
        height="25rem"
        backgroundImage={`url(${imgUrl})`}
        backgroundSize="cover"
        backgroundBlendMode="screen"
        backgroundPosition="center"
        transition="all 0.3s ease"
        transform="translateY(-25rem)"
      />
      <Box
        className={
          index! % 2 === 0 ? styles.projectTitle1 : styles.projectTitle2
        }
        height="5rem"
        zIndex={11}
      >
        <Text
          fontFamily="roboto mono"
          color={green}
          fontWeight="semibold"
          fontSize="sm"
          mb={1}
        >
          Featured Project
        </Text>
        <Text fontSize="4xl" fontWeight="bold">
          {title}
        </Text>
      </Box>
      <Box
        className={
          index! % 2 === 0
            ? styles.projectDescription1
            : styles.projectDescription2
        }
        height="7rem"
        bg={lightestNavy}
        padding={5}
        display="flex"
        justifyContent="center"
        alignItems="center"
        zIndex={11}
      >
        <Text fontSize="sm" color={lightSlate}>
          {description}
        </Text>
      </Box>
      <Box
        className={index! % 2 === 0 ? styles.projectTech1 : styles.projectTech2}
        height="2.5rem"
        zIndex={11}
        paddingLeft={1}
        paddingRight={1}
      >
        <Flex
          justifyContent={index! % 2 === 0 ? "flex-end" : "flex-start"}
          alignItems="center"
        >
          {techList}
        </Flex>
      </Box>
      <Box
        className={index! % 2 === 0 ? styles.projectLink1 : styles.projectLink2}
        height="2.5rem"
        zIndex={11}
      >
        <LinkOverlay
          href={githubLink}
          target="_blank"
          cursor="ne-resize"
          rel="noreferrer"
        >
          <Box
            ml="auto"
            display="flex"
            justifyContent={index! % 2 === 0 ? "flex-end" : "flex-start"}
          >
            <BiGitBranch size="1.5rem" />
          </Box>
        </LinkOverlay>
      </Box>
    </Box>
  );
};
