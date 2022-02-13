import { Box, Flex, Button, LinkOverlay } from "@chakra-ui/react";
import React from "react";
import { ProjectPanel, ProjectPanelProps } from "./ProjectPanel/ProjectPanel";
import SectionTitle from "./SectionTitle";
import tinyflowImage from "../assets/tinyflow_card.png";
import liredditImage from "../assets/lireddit.png";
import tokImage from "../assets/Tok.png";
import cerealibImage from "../assets/cerealib.png";
import grapheneImage from "../assets/graphene.png";

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
    title: "Tok",
    description:
      "A C Virtual Machine and Java Interpreter for a dynamically typed object oriented programming language called Tok with Automated Garbage Collection, Flow Control, and Closures.",
    technologies: ["C", "Java"],
    githubLink: "https://github.com/JyotinderSingh/ctok",
    imgUrl: tokImage,
  },
  {
    title: "Graphene",
    description:
      "A lightweight plug-n-play in-memory graph database which allows you to model and query social networks, knowledge webs, and anything else consisting of connected data points",
    technologies: ["TypeScript"],
    githubLink: "https://github.com/JyotinderSingh/graphene",
    imgUrl: grapheneImage,
  },
  {
    title: "Cerealib",
    description:
      "A high performance serialization library for Java which supports all Java Primitives, Strings, and Primitive Arrays - offering performance gains over the language's default implementation.",
    technologies: ["Java"],
    githubLink: "https://github.com/JyotinderSingh/Cerealib",
    imgUrl: cerealibImage,
  },
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
    technologies: ["GraphQL", "React", "Apollo", "Express", "Redis"],
    githubLink: "https://github.com/JyotinderSingh/lireddit",
    imgUrl: liredditImage,
  },
];

export default Projects;
