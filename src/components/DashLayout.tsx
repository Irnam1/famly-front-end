import { Grid, GridItem, Show } from "@chakra-ui/react";
import DashNavBar from "./DashNavBar";
import DashHeader from "./DashHeader";
import { Outlet } from "react-router-dom";

const DashLayout = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"header" "main" "footer"`,
          sm: `"header header"
                  "nav main"
                  "nav footer"`,
          lg: `"header header"
                  "nav main"
                  "nav footer"`,
        }}
        templateRows={"60px 1fr 30px"}
        templateColumns={{ base: "1fr", sm: "150px 1fr" }}
        minHeight="100vh"
      >
        <GridItem bg="white" area={"header"}>
          <DashHeader />
        </GridItem>

        <Show above="sm">
          <GridItem bg="white" area={"nav"}>
            <DashNavBar />
          </GridItem>
        </Show>
        <GridItem bg="white" area={"main"} padding={3}>
          <Outlet />
        </GridItem>
        <GridItem bg="white" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </>
  );
};

export default DashLayout;
