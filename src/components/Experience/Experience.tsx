import React from "react";
import {
  Box,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useBreakpointValue,
  Flex,
  Button,
  LinkOverlay,
} from "@chakra-ui/react";
import SectionTitle from "../SectionTitle";
import { BiShapeTriangle } from "react-icons/bi";
import styles from "./Exprience.module.css";
import { green, slate } from "../../colors";

interface ExperiencePanelProps {
  company: string;
  companyUrl: string;
  duration: string;
  points: string[];
  profile: string;
  certificateUrl?: string;
  certificateText?: string;
}

const ExperiencePanel: React.FC<ExperiencePanelProps> = ({
  profile,
  company,
  companyUrl,
  duration,
  points,
  certificateUrl,
  certificateText,
}) => {
  const workElements: JSX.Element[] = [];
  const widthBreakpoints = useBreakpointValue({
    base: "100%",
    md: "70%",
  });

  points.forEach((point) =>
    workElements.push(
      <Flex mb={2} alignItems="baseline">
        <BiShapeTriangle color={green} />
        <Text ml={2} color={slate} fontSize="sm" width={widthBreakpoints}>
          {point}
        </Text>
      </Flex>
    )
  );

  return (
    <Box>
      <Text fontSize="2xl" fontWeight="medium">
        {profile}{" "}
        <Text color={green} display="inline-block">
          @
        </Text>{" "}
        <a
          href={companyUrl}
          className={styles.underline}
          target="_blank"
          rel="noreferrer"
          style={{ color: green, cursor: "ne-resize" }}
        >
          {company}
        </a>
      </Text>
      <Text fontSize="sm" color={slate} fontFamily="roboto mono">
        {duration}
      </Text>
      <Box mt={5}>{workElements}</Box>
      {certificateUrl ? (
        <Button mt={5} variant="outline" colorScheme="teal" size="md">
          <LinkOverlay
            href={certificateUrl}
            rel="noreferrer"
            target="_blank"
          >
            {certificateText ? certificateText : "View Certificate"}
          </LinkOverlay>
        </Button>
      ) : null}
    </Box>
  );
};

const Experience: React.FC = () => {
  const orientationBreakpoints = useBreakpointValue({
    base: "horizontal" as const,
    md: "vertical" as const,
  });

  const overflowBreakpoints = useBreakpointValue({
    base: "scroll" as const,
    md: "initial" as const,
  });

  const maxWBreakpoints = useBreakpointValue({
    base: "100vw",
    md: undefined,
  });

  const experiencePanels: JSX.Element[] = [];

  experienceData.forEach((data) =>
    experiencePanels.push(
      <TabPanel>
        <ExperiencePanel
          company={data.company}
          companyUrl={data.companyUrl}
          duration={data.duration}
          points={data.points}
          profile={data.profile}
          certificateUrl={data.certificateUrl}
        />
      </TabPanel>
    )
  );

  return (
    <Box height="80vh" display="grid">
      <Box height="50vh">
        <SectionTitle serialNo={2} title="Where I've worked" />
        <Box>
          <Tabs
            orientation={orientationBreakpoints}
            variant="line"
            colorScheme="teal"
            mt={4}
          >
            <TabList
              overflowX={overflowBreakpoints}
              maxW={maxWBreakpoints}
              overflowY="clip"
            >
              <Tab>Cloudera</Tab>
              <Tab>CampK12</Tab>
              <Tab>Samsung</Tab>
            </TabList>
            <TabPanels>{experiencePanels}</TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
};

const experienceData: ExperiencePanelProps[] = [
  {
    company: "Cloudera",
    companyUrl: "https://www.cloudera.com/",
    duration: "Jan 2021 - present",
    points: [
      "Architected and built an in-house Cloud Spend Managment Solution to estimate cost information for different cloud providers in real time.",
      "Designed and implemented multiple end to end Machine Learning use cases for Cloudera Data Platform - Private Cloud.",
      "Worked with a variety of different tools and languages such as React, Python, Flask, SQL, Hive, Docker, Kubernetes.",
    ],
    profile: "Software Engineer",
  },
  {
    company: "CampK12",
    companyUrl: "https://campk12.com/",
    duration: "Apr 2020 - Jun 2020",
    points: [
      "Taught machine learning concepts and basics of programming to highschool students.",
      "Helped design curriculum and resources for the different courses available.",
    ],
    profile: "Instructor",
    certificateUrl:
      "https://drive.google.com/file/d/1u79S4Ol3ysKnIRbUi5FoxRpkSw-vJIFr/view?usp=sharing",
    certificateText: "Experience Certificate",
  },
  {
    company: "Samsung Research Institute - BLR",
    companyUrl: "https://research.samsung.com/sri-b",
    duration: "Oct 2019 - Aug 2020",
    points: [
      "Developed a No-Reference Image Quality Assessment method for Automated Image Quality Validation for camera samples from Samsung devices,",
      "Worked with various machine learning technologies like Tensorflow, scikit-learn, and OpenCV.",
      "Acted as the team lead as well as the college's point of contact for all company communication.",
    ],
    profile: "Student Developer",
    certificateUrl:
      "https://drive.google.com/file/d/1beY96bwMWM9TiK_W51Bipe18kTK2tQFP/view?usp=sharing",
  },
];

export default Experience;
