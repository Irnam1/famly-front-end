import { Button, Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  text: string;
  children: ReactNode;
}

const NavButton = ({ children, text }: Props) => {
  return (
    <Button width="110px" height="60px" borderRadius="15px">
      <Flex alignItems="center" flexDirection="column" rowGap={2}>
        {children}
        <Text fontSize="xs" color="gray.500">
          {text}
        </Text>
      </Flex>
    </Button>
  );
};

export default NavButton;
