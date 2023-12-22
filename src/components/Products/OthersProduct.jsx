import { Flex, Image, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import useWidth from "../../hooks/useWidth";
function OthersProduct({ others }) {
  const { width } = useWidth();
  return (
    <>
      <Text
        textTransform={"uppercase"}
        fontWeight={"bold"}
        fontSize={"25px"}
        as={"h1"}
        textAlign={"center"}
      >
        You May Also Like
      </Text>
      <Flex
        gap={"5px"}
        alignItems={"center"}
        justifyContent={"center"}
        w={"full"}
        px={"8"}
        flexDir={width > 600 ? "row" : "column"}
      >
        {others?.map((item, index) => (
          <Flex
            item={item}
            key={index}
            flexDir={"column"}
            justifyContent={"center"}
            gap={"5px"}
            alignItems={"center"}
          >
            <Image
              srcSet={`${item?.image?.desktop} 1920w, ${item?.image?.tablet} 800w, ${item?.image?.mobile} 480w`}
              sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1920px"
              alt={"img"}
            ></Image>
            <Text textAlign={"center"} fontSize={"20px"}>
              {item?.name}
            </Text>
            <Link
              as={RouterLink}
              to={`/${item?.slug}`}
              textTransform={"uppercase"}
              fontWeight={"bold"}
              backgroundColor={"var(--orange)"}
              color={"#fff"}
              textAlign={"center"}
              p={"10px 15px"}
              w={"200px"}
              borderRadius={"8px"}
              _hover={{ bg: "var(--black)" }}
            >
              See Product
            </Link>
          </Flex>
        ))}
      </Flex>
    </>
  );
}

export default OthersProduct;
