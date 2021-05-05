import { Box } from "@chakra-ui/react";
import React from "react";
import { green } from "../colors";

interface MenuItemProps {
  text: String;
  serialNo?: Number;
  highlight?: Boolean;
  onClick?: () => void;
  mr?: any;
  mt?: any;
}

const MenuItem: React.FC<MenuItemProps> = ({
  text,
  onClick,
  serialNo,
  highlight,
  mr,
  mt,
}) => {
  return (
    <Box
      display="flex"
      style={{ fontFamily: "roboto mono" }}
      border={highlight ? "1px" : undefined}
      borderRadius="10%"
      padding="0.6rem"
      textAlign="center"
      borderColor={green}
      color={highlight ? green : undefined}
      mr={mr}
      ml={highlight ? 2 : undefined}
      mt={mt}
      transition="all 0.3s ease"
      _hover={{
        cursor: "pointer",
        color: green,
        bg: highlight ? "rgba(77, 189, 176, 0.1)" : undefined,
      }}
    >
      <Box
        fontSize="0.95em"
        color={green}
        display="inline-block"
        marginRight={1}
      >
        {serialNo ? "0" + serialNo + "." : null}
      </Box>
      {text}
    </Box>
  );
};

export default MenuItem;
