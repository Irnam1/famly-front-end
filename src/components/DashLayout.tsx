import { Heading, Box, Spacer } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const DashLayout = () => {
  return (
    <>
      <Heading>DashLayout</Heading>
      <Box>
        <Link to="outings">See all events</Link>
        <Spacer />
        <Link to="user">See your profile</Link>
      </Box>
      <Outlet />
    </>
  );
};

export default DashLayout;
