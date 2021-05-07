import React, { useState, useEffect } from "react";
import { debounce } from "../utils/helpers";
import {
  Box,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import MenuItem from "./MenuItem";
import { CgMenuRight, CgCloseO } from "react-icons/cg";

interface DrawerMenuProps {
  onClose: () => void;
  isOpen: boolean;
}

interface MenuItemsProps {
  clickHandler: () => void;
}

const MenuItems: React.FC<MenuItemsProps> = ({ clickHandler }) => (
  <>
    <Link
      to="about"
      smooth={true}
      duration={500}
      offset={-20}
      onClick={clickHandler}
    >
      <MenuItem text="About" serialNo={1} />
    </Link>
    <Link
      to="experience"
      smooth={true}
      duration={600}
      offset={-20}
      onClick={clickHandler}
    >
      <MenuItem text="Experience" serialNo={2} />
    </Link>
    <Link
      to="work"
      smooth={true}
      duration={700}
      offset={-20}
      onClick={clickHandler}
    >
      <MenuItem text="Work" serialNo={3} />
    </Link>
    <Link
      to="contact"
      smooth={true}
      duration={800}
      offset={-20}
      onClick={clickHandler}
    >
      <MenuItem text="Contact" serialNo={4} />
    </Link>
  </>
);

const ResumeItem: React.FC<{ mt?: Number }> = ({ mt }) => {
  return (
    <a
      href="https://drive.google.com/file/d/1KkIeA7mmobh6APSekgiQaFMHElqzGKVC/view?usp=sharing"
      rel="noreferrer"
      target="_blank"
    >
      <MenuItem text="Resume" highlight={true} mt={mt} />
    </a>
  );
};

const DrawerMenu: React.FC<DrawerMenuProps> = ({ onClose, isOpen }) => (
  <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="xs">
    <DrawerOverlay style={{ backdropFilter: "blur(5px)" }} />
    <DrawerContent>
      <DrawerBody
        bg="#112240"
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Flex
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <MenuItems clickHandler={onClose} />
          <Spacer />
          <ResumeItem mt={5} />
          <IconButton
            variant="ghost"
            onClick={onClose}
            aria-label="close drawer"
            colorScheme="blue"
            icon={<CgCloseO size="2rem" />}
            borderRadius="50%"
            mt={10}
          />
        </Flex>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

const NavBar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState<boolean>(true);
  const [atTop, setAtTop] = useState<boolean>(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.onscroll = () => {
      window.addEventListener("scroll", handleScroll);
      if (window.pageYOffset === 0) {
        setAtTop(true);
      } else {
        setAtTop(false);
      }
    };

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <Box
      position="fixed"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      height="4.5rem"
      paddingTop={4}
      paddingLeft={3}
      paddingRight={3}
      paddingBottom={4}
      width="100%"
      top={visible ? "0" : "-4.5rem"}
      transition="top 0.5s ease"
      bg="rgba(10, 25, 47, 0.5)"
      zIndex="1000"
      style={
        atTop
          ? undefined
          : {
              backdropFilter: "blur(15px)",
              boxShadow: visible
                ? "0px 0.5rem 3rem 0px rgba(0,0,0,0.25)"
                : undefined,
              WebkitBoxShadow: visible
                ? "0px 0.5rem 3rem 0px rgba(0,0,0,0.25)"
                : undefined,
            }
      }
    >
      <Box
        borderWidth="initial"
        paddingTop={1}
        paddingBottom={1}
        paddingLeft={3}
        paddingRight={3}
        borderColor="teal.300"
        marginLeft={5}
        fontSize="1.2rem"
        fontWeight="semibold"
        textAlign="center"
        color="teal.100"
      >
        J
      </Box>
      <Box
        display={{ base: "none", sm: "none", md: "flex" }}
        justifyContent="space-around"
        width={{ sm: "60%", lg: "50%", xl: "40%" }}
        marginRight={5}
        color="blue.100"
        fontSize="0.9rem"
      >
        <MenuItems clickHandler={onClose} />
        <ResumeItem />
      </Box>
      <Box display={{ sm: "flex", md: "none" }}>
        <IconButton
          variant="ghost"
          size="lg"
          aria-label="hamburger menu"
          colorScheme="teal"
          icon={<CgMenuRight size="2rem" />}
          onClick={onOpen}
        />
      </Box>
      <DrawerMenu isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default NavBar;
