import NavButton from "./NavButton";
import { Flex, Icon, Spacer } from "@chakra-ui/react";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";
import { FaRegCalendarPlus } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";

const DashNavBar = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems={"center"}
      justifyContent={"space-between"}
      h="100%"
      paddingBlock={3}
    >
      <Flex flexDirection="column" rowGap={4} alignItems="center">
        <NavButton text="Manage family">
          <Icon as={FaPeopleGroup} boxSize={5} color={"gray"} />
        </NavButton>
        <NavButton text="Create outing">
          <Icon as={FaRegCalendarPlus} boxSize={5} color={"gray"} />
        </NavButton>
        <NavButton text="See participation">
          <Icon as={FaCalendarCheck} boxSize={5} color={"gray"} />
        </NavButton>
        <NavButton text="See all outings">
          <Icon as={FaCalendarDays} boxSize={5} color={"gray"} />
        </NavButton>
      </Flex>
      <Spacer />
      <NavButton text="Settings">
        <Icon as={MdOutlineSettingsSuggest} boxSize={6} color={"gray"} />
      </NavButton>
    </Flex>
  );
};

export default DashNavBar;
