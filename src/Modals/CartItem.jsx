import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { useProductCategories } from "../contexts/ProductsCategoriesProvider";

function CartItem({ item }) {
  const { incrementQuantity, decrementQuantity } = useProductCategories();
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"}>
      <Flex gap={"2px"} alignItems={"center"} justifyContent={"center"}>
        <Image h={"50px"} src={item.cartImage} />
        <Flex flexDir={"column"}>
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
        </Flex>
      </Flex>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        p={"6px 15px"}
        px={"10px"}
        bg={"#f1f1f1"}
      >
        <Button
          onClick={() => decrementQuantity(item.id)}
          _hover={{ color: "var(--orange)" }}
        >
          -
        </Button>
        <Text>{item.quantity}</Text>
        <Button
          onClick={() => incrementQuantity(item.id)}
          _hover={{ color: "var(--orange)" }}
        >
          +
        </Button>
      </Flex>
    </Flex>
  );
}

export default CartItem;
