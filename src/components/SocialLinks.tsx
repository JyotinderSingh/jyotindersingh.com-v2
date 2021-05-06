import { Flex, IconButton, LinkOverlay } from "@chakra-ui/react";
import React from "react";
import {
  FiGithub,
  FiTwitter,
  FiYoutube,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";
import { IconType } from "react-icons/lib";
import { green, slate } from "../colors";

interface SocialIconProps {
  LinkIcon: IconType;
  ariaLabel: string;
  link?: string | undefined;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  LinkIcon,
  ariaLabel,
  link,
}) => (
  <IconButton
    aria-label={ariaLabel}
    variant="ghost"
    href="jyotindersingh.com"
    borderRadius="50%"
    icon={
      <LinkOverlay
        href={link}
        target="_blank"
        cursor="ne-resize"
        rel="noreferrer"
      >
        <LinkIcon size="1.2rem" />
      </LinkOverlay>
    }
    mb={2}
    color={slate}
    transition="all 0.3s ease"
    _hover={{
      transform: "translateY(-0.2rem)",
      color: green,
    }}
  />
);

const SocialLinks: React.FC = () => {
  return (
    <>
      <Flex flexDirection="column" position="fixed" left="3rem" bottom="7.2rem">
        <SocialIcon
          LinkIcon={FiGithub}
          ariaLabel="github"
          link="https://github.com/JyotinderSingh"
        />
        <SocialIcon
          LinkIcon={FiLinkedin}
          ariaLabel="linkedin"
          link="https://www.linkedin.com/in/jyotinder-singh/"
        />
        <SocialIcon
          LinkIcon={FiYoutube}
          ariaLabel="youtube"
          link="https://youtube.com/c/JyotinderSingh"
        />
        <SocialIcon
          LinkIcon={FiTwitter}
          ariaLabel="twitter"
          link="https://twitter.com/Jyotinder_Singh"
        />
        <SocialIcon
          LinkIcon={FiInstagram}
          ariaLabel="instagram"
          link="https://www.instagram.com/jyotinder_singh/"
        />
      </Flex>
      <div
        style={{
          borderLeft: `1px solid ${slate}`,
          height: "6.2rem",
          position: "fixed",
          left: "4.23rem",
          bottom: "0",
        }}
      ></div>
    </>
  );
};

export default SocialLinks;
