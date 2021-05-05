import React from "react";
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
import MenuItem from "./MenuItem";
import { CgMenuRight, CgCloseO } from "react-icons/cg";

interface DrawerMenuProps {
  onClose: () => void;
  isOpen: boolean;
}

const menuItems = (
  <>
    <MenuItem text="About" serialNo={1} />
    <MenuItem text="Experience" serialNo={2} />
    <MenuItem text="Work" serialNo={3} />
    <MenuItem text="Contact" serialNo={4} />
  </>
);

const ResumeItem: React.FC<{ mt?: Number }> = ({ mt }) => {
  return <MenuItem text="Resume" highlight={true} mt={mt} />;
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
          {menuItems}
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
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      height="4.5rem"
      paddingTop={4}
      paddingLeft={3}
      paddingRight={3}
      width="100%"
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
        {menuItems}
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
