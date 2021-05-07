import * as React from "react";
import { Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import TitleSection from "./components/TitleSection/TitleSection";
import SocialLinks from "./components/SocialLinks";
import Email from "./components/Email";
import AboutMe from "./components/AboutMe/AboutMe";
import styles from "./App.module.css";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

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
      <div className={styles.experience}>
        <Experience />
      </div>
      <div className={styles.projects}>
        <Projects />
      </div>
      <div className={styles.contact}>
        <Contact />
      </div>
      <div className={styles.left}>
        <SocialLinks />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>

      <div className={styles.right}>
        <Email />
      </div>
    </div>
  </Box>
);
