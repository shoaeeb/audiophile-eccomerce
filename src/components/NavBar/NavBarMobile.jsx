import {
  Flex,
  Image,
  Modal,
  ModalBody,
  useDisclosure,
  Img,
  Text,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import CartModal from "../../Modals/CartModal";
import CartLogo from "../../Modals/CartLogo";
function NavBarMobile() {
  const { onOpen, onClose } = useDisclosure();
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setCartOpen(false);
  }, [location.pathname]);
  return (
    <>
      <Flex flexDir={"column"}>
        <Flex
          w={"100vw"}
          color={"#fff"}
          padding={16}
          backgroundColor={"#191919"}
          fontSize={"18px"}
          justify={"space-between"}
          //   hamburger
        >
          <Flex gap={"30px"} alignItems={"center"}>
            <Image
              onClick={() => {
                setIsOpen(!isOpen);
                onOpen();
              }}
              src={`/images/shared/tablet/icon-${
                !isOpen ? "hamburger" : "close-menu"
              }.svg`}
              alt="logo"
            />
            <Link as={RouterLink} to="/">
              <Image src={"/images/shared/desktop/logo.svg"} alt="logo" />
            </Link>
          </Flex>
          <CartLogo onClick={() => setCartOpen(!isCartOpen)} />
        </Flex>

        {isOpen && (
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalBody
              bg={"#fff"}
              position={"absolute"}
              top={"100px"}
              h={"200px"}
              w={"100%"}
            >
              <Flex
                textAlign={"center"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"30px"}
                textTransform={"uppercase"}
                my={"26px"}
                w={"100%"}
              >
                <Flex
                  flexDir={"column"}
                  gap={"1px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Img
                    src={"/images/cart/image-xx99-mark-one-headphones.jpg"}
                    alt="headphones"
                    h={"60px"}
                    background={"transparent"}
                  />
                  <Text>Headphones</Text>
                  <Link
                    color={"#7c7b78"}
                    _hover={{ color: "#d87d4a" }}
                    textDecoration={"underline"}
                    as={RouterLink}
                    to="/headphones"
                    textAlign={"center"}
                  >
                    Shop Now
                  </Link>
                </Flex>
                <Flex
                  flexDir={"column"}
                  gap={"1px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Img
                    src={"/images/cart/image-zx9-speaker.jpg"}
                    alt="speakers"
                    h={"60px"}
                    background={"transparent"}
                  />
                  <Text>Speakers</Text>
                  <Link
                    color={"#7c7b78"}
                    textDecoration={"underline"}
                    as={RouterLink}
                    _hover={{ color: "#d87d4a" }}
                    to="/speakers"
                    textAlign={"center"}
                  >
                    Shop Now
                  </Link>
                </Flex>
                <Flex
                  flexDir={"column"}
                  gap={"1px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Img
                    src={"/images/cart/image-yx1-earphones.jpg"}
                    alt="speakers"
                    h={"60px"}
                    background={"transparent"}
                  />
                  <Text>Earphones</Text>
                  <Link
                    color={"#7c7b78"}
                    textDecoration={"underline"}
                    as={RouterLink}
                    to="/earphones"
                    _hover={{ color: "#d87d4a" }}
                    textAlign={"center"}
                  >
                    Shop Now
                  </Link>
                </Flex>
              </Flex>
            </ModalBody>
          </Modal>
        )}
      </Flex>
      {isCartOpen && (
        <CartModal isCartOpen={isCartOpen} setCartOpen={setCartOpen} />
      )}
    </>
  );
}

export default NavBarMobile;
