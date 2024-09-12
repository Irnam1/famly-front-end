import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import DashSearchInput from "./DashSearchInput";

const DashHeader = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      paddingTop="7px"
      paddingX="35px"
    >
      <Link to="/">
        <Text fontSize="3xl" fontWeight="800">
          Famly
        </Text>
      </Link>
      <Box>
        <DashSearchInput />
      </Box>
      <Box paddingTop="10px">Username</Box>
    </Box>
  );
};

export default DashHeader;
