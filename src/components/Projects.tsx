import { Box, Flex, Button, LinkOverlay } from "@chakra-ui/react";
import React from "react";
import { ProjectPanel, ProjectPanelProps } from "./ProjectPanel/ProjectPanel";
import SectionTitle from "./SectionTitle";
import tinyflowImage from "../assets/tinyflow_card.png";
import liredditImage from "../assets/lireddit.png";
import shoplyftImage from "../assets/ShopLyft.png";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  const projects: JSX.Element[] = [];

  projectData.forEach((project, idx) =>
    projects.push(
      <ProjectPanel
        description={project.description}
        githubLink={project.githubLink}
        imgUrl={project.imgUrl}
        technologies={project.technologies}
        title={project.title}
        index={idx}
        key={project.githubLink}
      />
    )
  );

  return (
    <Box display="grid" id="work">
      <Box>
        <SectionTitle serialNo={2} title="Some things I've built" />
        <Flex flexDir="column" mt={4} justifyContent="space-between">
          {projects}
        </Flex>
        <Flex justifyContent="center">
          <Button
            mt={5}
            variant="outline"
            colorScheme="teal"
            size="lg"
            fontSize="sm"
            fontFamily="roboto mono"
          >
            <LinkOverlay
              href="https://github.com/JyotinderSingh"
              rel="noreferrer"
              target="_blank"
            >
              Show More
            </LinkOverlay>
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

const projectData: ProjectPanelProps[] = [
  {
    title: "TinyFlow",
    description:
      "A Deep Learning framework which includes multiple Layers with regularization, several Non-Linearities, Optimizers, and Loss Functions.",
    githubLink:
      "https://github.com/JyotinderSingh/TinyFlow-Deep-Learning-Framework",
    imgUrl: tinyflowImage,
    technologies: ["Python", "NumPy"],
  },
  {
    title: "liReddit",
    description:
      "A full stack mini Reddit Clone with CRUD, session management, and client side caching, written in TypeScript and GraphQL.",
    technologies: ["GraphQL", "React", "URQL", "Express", "TS"],
    githubLink: "https://github.com/JyotinderSingh/lireddit",
    imgUrl: liredditImage,
  },
  {
    title: "ShopLyft",
    description:
      "A fully featured marketplace application with buying, selling, inventory, and user management features.",
    githubLink: "https://github.com/JyotinderSingh/ShopLyft",
    imgUrl: shoplyftImage,
    technologies: ["Flutter", "Firebase", "Dart"],
  },
];

export default Projects;
