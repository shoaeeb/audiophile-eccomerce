import { Flex, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import useSearchProductByCategories from "../../hooks/useSearchProductByCategories";

function Header() {
  const { pathname } = useLocation();
  const { isLoading, category } = useSearchProductByCategories(
    pathname.slice(1)
  );
  return (
    <Flex
      backgroundColor={"#191919"}
      w={"full"}
      justifyContent={"center"}
      alignItems={"center"}
      h={"160px"}
    >
      <Text
        textTransform={"uppercase"}
        as={"h1"}
        fontSize={"30px"}
        color={"#fff"}
        letterSpacing={"2px"}
      >
        {pathname.slice(1).toUpperCase()}
      </Text>
    </Flex>
  );
}

export default Header;
