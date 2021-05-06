import * as React from "react";
import { Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import TitleSection from "./components/AboutMe/TitleSection/TitleSection";
import SocialLinks from "./components/SocialLinks";
import Email from "./components/Email";
import AboutMe from "./components/AboutMe/AboutMe";
import styles from "./App.module.css";

export const App = () => (
  <Box>
    <NavBar />
    <div className={styles.container}>
      <div className={styles.center}>
        <TitleSection />
      </div>
      <div className={styles.aboutMe}>
        <AboutMe />
      </div>
      <div className={styles.left}>
        <SocialLinks />
      </div>
      <div className={styles.right}>
        <Email />
      </div>
    </div>
  </Box>
);
