import { Box, Text } from "@chakra-ui/react";

const FamilyIntro = () => {
  return (
    <Box
      className="test"
      overflow="hidden"
      borderRadius="30px"
      bgGradient="linear-gradient(125deg, rgba(251,117,135,1) 0%, rgba(204,255,115,1) 100%)"
      maxHeight="200px"
      paddingBottom={30}
      paddingX="10px"
    >
      <Text fontSize="3xl" textAlign="center" marginTop={2}>
        Famille
      </Text>
      <Text
        fontFamily="aclonica"
        textAlign="center"
        fontSize="5xl"
        marginTop={-4}
      >
        Vieuxmoulin du près
      </Text>
      <Text textAlign="center" fontSize="xs">
        "Une famille que l’on apprécie parce qu’elle est chaleureuse."
      </Text>
    </Box>
  );
};

export default FamilyIntro;
