import { Heading } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <>
      <Heading>PublicLayout</Heading>
      <Outlet />
    </>
  );
};

export default PublicLayout;
