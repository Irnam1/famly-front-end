import { Grid, GridItem, Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import PublicHeader from "./PublicHeader";

const PublicLayout = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"header"
               "main"`,
        }}
        templateRows={"90px 1fr"}
        templateColumns="1fr"
        minHeight="100vh"
        minWidth="100vw"
      >
        <GridItem bg="white" area={"header"}>
          <PublicHeader />
        </GridItem>

        <GridItem bg="white" area={"main"}>
          <Box
            w="100%"
            h="100%"
            paddingTop="50px"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Outlet />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default PublicLayout;
