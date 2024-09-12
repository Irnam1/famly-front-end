import { Grid, GridItem } from "@chakra-ui/react";
import FamilyIntro from "../../components/FamilyIntro";
import NextOutings from "../../components/NextOutings";
const Welcome = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"status"
              "events"`,
        }}
        templateRows={"200px 1fr"}
        templateColumns={{ base: "1fr", sm: "1fr" }}
        minHeight="100%"
        paddingRight="15px"
      >
        <GridItem bg="white" area={"status"}>
          <FamilyIntro />
        </GridItem>

        <GridItem bg="white" area={"events"}>
          <NextOutings />
        </GridItem>
      </Grid>
    </>
  );
};

export default Welcome;
