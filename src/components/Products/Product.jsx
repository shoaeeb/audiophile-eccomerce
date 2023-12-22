import { Flex, Image, Box, Text, Link } from "@chakra-ui/react";
import useWidth from "../../hooks/useWidth";
import { Link as RouterLink } from "react-router-dom";
function Product({ flexDirection, item }) {
  const { id, name, description, categoryImage, slug } = item;
  const { width } = useWidth();

  return (
    <Flex
      overflowX={"hidden"}
      w={"full"}
      flexDir={`${width > 600 ? flexDirection : "column-reverse"}`}
      alignItems={"center"}
      my={"50px"}
      h={"fit-content"}
      justifyContent={"center"}
      px={"20px"}
    >
      <Flex
        gap={"10px"}
        w={"50%"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        textAlign={"center"}
        marginRight={width > 600 ? "20%" : ""}
      >
        <Text fontSize={"20px"} textTransform={"uppercase"} color={"#000"}>
          {name}
        </Text>
        <Text fontSize={"15px"} color={"'#d3d3d3"}>
          {description}
        </Text>
        <Box
          _hover={{ bg: "#000", color: "#fff" }}
          color={"#fff"}
          p={"8px 40px"}
          borderRadius={"8px"}
          w={"max-content"}
          backgroundColor={"var(--orange)"}
        >
          <Link
            fontWeight={"bold"}
            fontSize={"12px"}
            as={RouterLink}
            to={`${slug}?prodId=${id}`}
            textTransform={"uppercase"}
          >
            See Product
          </Link>
        </Box>
      </Flex>
      <Flex w={"50%"} marginLeft={width > 600 ? "20%" : " "}>
        <Image
          h={"100%"}
          srcSet={`${categoryImage.desktop} 1920w, ${categoryImage.tablet} 800w, ${categoryImage.mobile} 480w`}
          sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1920px"
          alt={"img"}
        ></Image>
      </Flex>
    </Flex>
  );
}

export default Product;
