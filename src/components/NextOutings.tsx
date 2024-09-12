import { SimpleGrid, Text } from "@chakra-ui/react";

const NextOutings = () => {
  return (
    <>
      <Text fontWeight="600" paddingLeft="10px" fontSize="xl">
        Prochaines sorties
      </Text>
      <SimpleGrid
        columns={{
          base: 1,
          sm: 2,
          lg: 4,
        }}
        gap={5}
        bg="gray.100"
        height="90%"
        width="100%"
        borderRadius="20px"
        padding={5}
      >
        The next outings go here.
      </SimpleGrid>
    </>
  );
};

export default NextOutings;
