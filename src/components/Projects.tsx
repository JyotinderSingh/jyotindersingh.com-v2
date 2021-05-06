import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { ProjectPanel, ProjectPanelProps } from "./ProjectPanel/ProjectPanel";
import SectionTitle from "./SectionTitle";
import tinyflowImage from "../assets/tinyflow.png";
import socialapeImage from "../assets/socialape.png";
import algoImage from "../assets/algo.jpg";

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
    title: "SocialApe",
    description:
      "A Twitter style social media application that allows you to create, like, comment on, and delete screams (our version of tweets :3)",
    technologies: ["React", "Redux", "Firebase", "MUI"],
    githubLink: "https://github.com/JyotinderSingh/ShopLyft",
    imgUrl: socialapeImage,
  },
  {
    title: "Algo Marathon",
    description:
      "A set of 300+ curated algorithm problems from LeetCode with solutions and explanations in C++. Built this repository while preparing for coding interviews.",
    githubLink: "https://github.com/JyotinderSingh/Algorithms",
    imgUrl: algoImage,
    technologies: ["Python", "C++"],
  },
];

export default Projects;
