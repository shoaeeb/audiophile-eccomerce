import { Flex, Text, Image } from "@chakra-ui/react";
import useWidth from "../hooks/useWidth";
function CartModalEmpty() {
  //this is fetch some data from the server
  //if the cart is empty
  //then this will be rendered
  const { width } = useWidth();
  return (
    <Flex
      position={"absolute"}
      right={"20px"}
      backgroundColor={"white"}
      h={"200px"}
      w={width > 600 ? "45%" : "75%"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={"100"}
    >
      <Text color={"#000"}>Your Cart Is Empty</Text>
      <Image w={"100px"} src={"/images/cart/empty-cart.png"} alt="logo" />
    </Flex>
  );
}

export default CartModalEmpty;
