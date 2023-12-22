import { Flex, Text, Button, Link } from "@chakra-ui/react";
import CartItem from "./CartItem";
import { useProductCategories } from "../contexts/ProductsCategoriesProvider";
import { numberToCurrency } from "../utils/helpers";
import { Link as RouterLink } from "react-router-dom";
import useWidth from "../hooks/useWidth";
function CartModalFull({ isCartOpen, setCartOpen, cart }) {
  //this is fetch some data from the server
  //remove items
  //update items
  //if the cart is not empty
  //then this will be not be rendered
  //get the total items from the server
  const { setCart } = useProductCategories();
  const { width } = useWidth();
  function handleRemoveAll() {
    if (
      window.confirm("Are you sure you want to remove all items from the cart?")
    ) {
      setCart([]);
      setCartOpen(!isCartOpen);
      return;
    }
    return;
  }
  const total = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);
  return (
    <Flex
      cursor={"pointer"}
      position={"absolute"}
      right={"20px"}
      h={"200px"}
      w={width > 600 ? "45%" : "75%"}
      maxH={"600px"}
      overflowY={"scroll"}
      flexDir={"column"}
      px={"10px"}
      gap={"10px"}
      backgroundColor={"white"}
      borderRadius={"8px"}
      zIndex={"100"}
    >
      {/* header */}
      <Flex
        justifyContent={"space-between"}
        color={"#000"}
        w={"full"}
        textTransform={"uppercase"}
      >
        <Text>Cart - {cart.length}</Text>
        <Button
          variant={"flushed"}
          onClick={handleRemoveAll}
          textDecoration={"underline"}
        >
          Remove All
        </Button>
      </Flex>
      {/* body */}
      {cart.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}

      {/* footer */}
      <Flex justifyContent={"space-between"}>
        <Text>Total</Text>
        <Text>{numberToCurrency(total)}</Text>
      </Flex>
      <Flex justifyContent={"center"} alignItems={"center"}>
        <Link
          backgroundColor={"var(--orange)"}
          color={"#fff"}
          _hover={{ bg: "var(--black)" }}
          p={"10px 15px"}
          as={RouterLink}
          to="/checkout"
        >
          Checkout
        </Link>
      </Flex>
    </Flex>
  );
}

export default CartModalFull;
