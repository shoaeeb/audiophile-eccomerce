import { Flex, Image, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { RightArrow } from "../../constants/constants";
import { useRef } from "react";
import useSectionHidden from "../../hooks/useSectionHidden";
import useWidth from "../../hooks/useWidth";
function ProductCategories() {
  const section = useRef(null);
  const { width } = useWidth();
  useSectionHidden(
    [section],
    {
      root: null,
      threshold: 0.5,
    },
    ["section-hidden"]
  );
  return (
    <Flex
      ref={section}
      backgroundColor={"#fff"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={width > 600 ? "20px" : "40px"}
      h={"500px"}
      w={"100%"}
      px={"10%"}
      my={width < 600 ? "200px" : "20px"}
      flexDir={width > 600 ? "row" : "column"}
      className={"section-hidden section-visible"}
    >
      <Flex
        flexDir={"column"}
        gap={10}
        alignItems={"center"}
        w={"60%"}
        h={"max-content"}
        backgroundColor={"var(--gray)"}
        padding={"15px"}
        borderRadius={"8px"}
      >
        <Image
          h={"100px"}
          src={"/images/home/desktop/image-speaker-zx9.png"}
          alt={"img"}
          transform={"translateY(-45px)"}
        />
        <Text
          textTransform={"uppercase"}
          fontStyle={"bold"}
          letterSpacing={"5px"}
          fontSize={"15px"}
        >
          Speakers
        </Text>
        <Link
          as={RouterLink}
          _hover={{ color: "var(--orange)" }}
          to={"/speakers"}
          fontSize={"15px"}
          display={"flex"}
          alignItems={"center"}
          gap={"10px"}
          textTransform={"uppercase"}
        >
          Shop Now {"  "}
          <RightArrow />
        </Link>
      </Flex>
      <Flex
        flexDir={"column"}
        gap={10}
        alignItems={"center"}
        w={"60%"}
        h={"max-content"}
        backgroundColor={"var(--gray)"}
        padding={"15px"}
        borderRadius={"8px"}
      >
        <Image
          h={"100px"}
          src={"/images/shared/desktop/image-earphones.png"}
          alt={"img"}
          transform={"translateY(-45px)"}
        />
        <Text
          textTransform={"uppercase"}
          fontStyle={"bold"}
          letterSpacing={"5px"}
          fontSize={"15px"}
        >
          Earphones
        </Text>
        <Link
          as={RouterLink}
          to={"/earphones"}
          fontSize={"15px"}
          display={"flex"}
          alignItems={"center"}
          gap={"10px"}
          _hover={{ color: "var(--orange)" }}
          textTransform={"uppercase"}
        >
          Shop Now <RightArrow />
        </Link>
      </Flex>
      <Flex
        flexDir={"column"}
        gap={10}
        alignItems={"center"}
        w={"60%"}
        h={"max-content"}
        backgroundColor={"var(--gray)"}
        padding={"15px"}
        borderRadius={"8px"}
      >
        <Image
          h={"100px"}
          src={
            "/images/product-xx99-mark-one-headphones/desktop/image-product.jpg"
          }
          alt={"img"}
          transform={"translateY(-45px)"}
        />
        <Text
          textTransform={"uppercase"}
          fontStyle={"bold"}
          letterSpacing={"5px"}
          fontSize={"15px"}
        >
          Headphones
        </Text>
        <Link
          as={RouterLink}
          to={"/headphones"}
          fontSize={"15px"}
          display={"flex"}
          alignItems={"center"}
          gap={"10px"}
          _hover={{ color: "var(--orange)" }}
          textTransform={"uppercase"}
        >
          Shop Now <RightArrow />
        </Link>
      </Flex>
    </Flex>
  );
}

export default ProductCategories;
