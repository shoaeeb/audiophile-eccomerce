import { Flex, Image, Link } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CartModal from "../../Modals/CartModal";
import { useProductCategories } from "../../contexts/ProductsCategoriesProvider";
import CartLogo from "../../Modals/CartLogo";

function NavBar() {
  const location = useLocation();
  const [isCartOpen, setCartOpen] = useState(false);
  const { cart } = useProductCategories();
  const [cartQuantity, setCartQuantity] = useState(cart.length);
  useEffect(() => {
    setCartQuantity(cart.length);
    setCartOpen(false);
  }, [cart, location.pathname]);
  return (
    <>
      <Flex
        color={"#fff"}
        padding={16}
        backgroundColor={"#191919"}
        fontSize={"18px"}
        justify={"space-between"}
      >
        <Flex>
          <Link as={RouterLink} to="/">
            <Image src={"/images/shared/desktop/logo.svg"} alt="logo" />
          </Link>
        </Flex>
        <Flex gap={"20px"}>
          <Link
            color={`${location.pathname === "/" ? "#d87d4a" : ""}`}
            as={RouterLink}
            to="/"
          >
            Home
          </Link>
          <Link
            as={RouterLink}
            color={`${location.pathname === "/headphones" ? "#d87d4a" : ""}`}
            to="/headphones"
          >
            Headphones
          </Link>
          <Link
            color={`${location.pathname === "/speakers" ? "#d87d4a" : ""}`}
            as={RouterLink}
            to="/speakers"
          >
            Speakers
          </Link>
          <Link
            color={`${location.pathname === "/earphones" ? "#d87d4a" : ""}`}
            as={RouterLink}
            to="/earphones"
          >
            Earphones
          </Link>
        </Flex>
        {/* <Flex onClick={() => setCartOpen(!isCartOpen)}>
          <Image src={"/images/shared/desktop/icon-cart.svg"} alt="logo" />
          {cartQuantity > 0 && (
            <Text color={"var(--orange)"}>{cartQuantity}</Text>
          )}
        </Flex> */}
        <CartLogo onClick={() => setCartOpen(!isCartOpen)} />
      </Flex>
      {isCartOpen && (
        <CartModal isCartOpen={isCartOpen} setCartOpen={setCartOpen} />
      )}
    </>
  );
}

export default NavBar;
