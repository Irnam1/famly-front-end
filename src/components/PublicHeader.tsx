import { Box, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const PublicHeader = () => {
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
      <Link to="register">
        <Button>S'inscrire</Button>
      </Link>
    </Box>
  );
};

export default PublicHeader;
