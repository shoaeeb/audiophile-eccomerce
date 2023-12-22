import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import useWidth from "../../hooks/useWidth";
import { Link as RouterLink } from "react-router-dom";
function Speaker() {
  const { width } = useWidth();

  return (
    <Flex
      w={"full"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"10px"}
      flexDir={width > 600 ? "row" : "column"}
      bg={"var(--orange)"}
    >
      <Flex w={"50%"} position={"relative"}>
        <Image
          h={"100%"}
          srcSet={
            "/images/product-zx9-speaker/desktop/image-product.jpg 1920w, /images/product-zx9-speaker/tablet/image-product.jpg 800w, /images/product-zx9-speaker/mobile/image-product.jpg 480w"
          }
          sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1920px"
          alt={"img"}
        />
        <Box
          position={"absolute"}
          top={0}
          right={0}
          bottom={0}
          left={0}
          backgroundColor={"var(--orange)"}
          opacity={0.3}
          mixBlendMode={"multiply"}
        />
      </Flex>
      <Flex
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"20px"}
        w={"50%"}
        textAlign={"center"}
      >
        <Text
          color={"white"}
          textTransform={"uppercase"}
          letterSpacing={"5px"}
          fontSize={"30px"}
        >
          {" "}
          Zx9 Speaker
        </Text>
        <Text color={"white"} fontSize={"15px"} w={"40%"}>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </Text>
        <Box
          _hover={{ bg: "#343634" }}
          bg={"#000"}
          color={"white"}
          p={"10px 40px"}
          borderRadius={"8px"}
        >
          <Link
            fontWeight={"bold"}
            fontSize={"12px"}
            as={RouterLink}
            to={"/speakers"}
            textTransform={"uppercase"}
          >
            See Product
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Speaker;
