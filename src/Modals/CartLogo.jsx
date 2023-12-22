import { Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useProductCategories } from "../contexts/ProductsCategoriesProvider";

function CartLogo({ onClick }) {
  const { cart } = useProductCategories();
  const [cartQuantity, setCartQuantity] = useState(cart.length);
  useEffect(() => {
    setCartQuantity(cart.length);
  }, [cart]);
  return (
    <Flex onClick={onClick}>
      <Image src={"/images/shared/desktop/icon-cart.svg"} alt="logo" />
      {cartQuantity > 0 && <Text color={"var(--orange)"}>{cartQuantity}</Text>}
    </Flex>
  );
}

export default CartLogo;
