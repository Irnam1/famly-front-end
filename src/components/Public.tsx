import { Link } from "react-router-dom";
import { Heading, Text, Box, Button } from "@chakra-ui/react";

import bgWelcome from "../assets/bg-welcome.png";
const Public = () => {
  return (
    <>
      <Box
        h="100%"
        w="100%"
        bgImage={bgWelcome}
        bgPosition="bottom center"
        bgRepeat="no-repeat"
        bgSize="100%"
      >
        <Box
          display="flex"
          height="100%"
          flexDirection="column"
          alignItems="center"
          rowGap="9"
        >
          <Heading as="h1" size="xl" textAlign="center">
            Family outing manager
          </Heading>
          <Text
            fontSize="m"
            fontWeight="100"
            maxWidth="900px"
            textAlign="center"
            paddingX="50px"
          >
            Gérer vos sortie en famille pour être prêts le jour J ! Pour
            l’instant ce n’est qu’un prototype pour une appli viable sur le
            court terme car il s’agit seulement d’avoir un travail.
          </Text>
          <Link to="login">
            <Button>Commencer</Button>
          </Link>
        </Box>
      </Box>
    </>
    // <div>
    //   <Link to="login">
    //     <h2>Login</h2>
    //   </Link>
    //   <Link to="register">
    //     <h2>Register</h2>
    //   </Link>
    // </div>
  );
};

export default Public;
