import { Input, InputGroup, InputLeftElement, Icon } from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";
const DashSearchInput = () => {
  return (
    <InputGroup padding={1}>
      <InputLeftElement height="100%" pointerEvents="none">
        <Icon as={IoSearch} marginStart="10px" color="gray.500" boxSize={5} />
      </InputLeftElement>
      <Input
        minWidth="300px"
        borderRadius="50px"
        bg={"white"}
        id="eventSearch"
        type="text"
        placeholder="Search for an outing..."
      />
    </InputGroup>
  );
};

export default DashSearchInput;
