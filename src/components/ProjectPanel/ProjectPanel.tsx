import React from "react";
import { Box, IconButton, LinkOverlay, Spacer, Text } from "@chakra-ui/react";

import styles from "./ProjectPanel.module.css";
import {
  green,
  lightestNavy,
  lightestSlate,
  lightSlate,
  white,
} from "../../colors";
import { BiGitBranch } from "react-icons/bi";
import useWindowDimensions from "../../hooks/useWindowDimensions";

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
  const { width: screenWidth } = useWindowDimensions();
  const techList: JSX.Element[] = [];

  technologies.forEach((tech) =>
    techList.push(
      <Text
        color={screenWidth > 970 ? lightestSlate : white}
        fontFamily="roboto mono"
        // ml={screenWidth > 400 ? 2 : 1}
        // mr={screenWidth > 400 ? 2 : 1}
        fontSize={screenWidth > 400 ? "sm" : "xs"}
        // letterSpacing="1px"
        key={tech}
      >
        {tech}
      </Text>
    )
  );

  const isEven: boolean = index! % 2 === 0;

  return (
    <Box width="100%" height="25rem" className={styles.container} mb="5rem">
      <Box
        className={isEven ? styles.projectCard1 : styles.projectCard2}
        backgroundImage={
          screenWidth > 970
            ? `linear-gradient(to right bottom, rgba(55, 163, 163, 0.35), rgba(55, 163, 163, 0.35)), url(${imgUrl})`
            : `linear-gradient(to right bottom, rgba(29, 41, 71, 0.90), rgba(29, 41, 71, 0.90)), url(${imgUrl})`
        }
        backgroundSize="cover"
        // backgroundBlendMode="screen"
        backgroundPosition="top"
        backgroundRepeat="no-repeat"
        transition="all 0.3s ease"
        borderRadius="0.3rem"
        zIndex={10}
        _hover={{
          opacity: 0,
        }}
      />

      <Box
        display="inline"
        className={isEven ? styles.projectCard1 : styles.projectCard2}
        backgroundImage={
          screenWidth > 970
            ? `url(${imgUrl})`
            : `linear-gradient(to right bottom, rgba(29, 41, 71, 0.80), rgba(29, 41, 71, 0.85)), url(${imgUrl})`
        }
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="top"
        borderRadius="0.3rem"
        transition="all 0.3s ease"
      />
      <Box
        className={isEven ? styles.projectTitle1 : styles.projectTitle2}
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
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            style={{
              cursor: "ne-resize",
            }}
          >
            {title}
          </a>
        </Text>
      </Box>
      <Box
        className={
          isEven ? styles.projectDescription1 : styles.projectDescription2
        }
        height="7rem"
        bg={lightestNavy}
        padding={5}
        display="flex"
        justifyContent="center"
        alignItems="center"
        zIndex={11}
      >
        <Text fontSize="sm" color={screenWidth > 970 ? lightSlate : white}>
          {description}
        </Text>
      </Box>
      <Box
        className={isEven ? styles.projectTech1 : styles.projectTech2}
        zIndex={11}
        paddingLeft={1}
        paddingRight={1}
        display="flex"
        // justifyContent={isEven ? "flex-end" : "flex-start"}
        justifyContent="space-around"
        alignItems="center"
        // bg="red"
      >
        {techList}
      </Box>
      <Box
        className={isEven ? styles.projectLink1 : styles.projectLink2}
        zIndex={11}
      >
        <IconButton
          aria-label="github link"
          variant="ghost"
          borderRadius="50%"
          color={lightestSlate}
        >
          <LinkOverlay
            href={githubLink}
            target="_blank"
            cursor="ne-resize"
            rel="noreferrer"
          >
            <BiGitBranch size="1.5rem" />
          </LinkOverlay>
        </IconButton>
      </Box>
    </Box>
  );
};
