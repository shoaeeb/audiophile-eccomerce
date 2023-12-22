import { Box, Text, Image, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import useWidth from "../../hooks/useWidth";
function HeadPhone() {
  const { width } = useWidth();
  //-200px -50px
  return (
    <Box
      h={width > 900 ? "100vh" : "100%"}
      backgroundImage="url('/images/home/desktop/image-hero.jpg')"
      backgroundColor={"#191919"}
      backgroundPosition={width > 500 ? "center bottom" : "-75px -1px"}
      backgroundRepeat="no-repeat"
      backgroundSize={"100%"}
      mt={0}
      py={width < 900 ? "10px" : " "}
    >
      <Text
        letterSpacing={5}
        as={"h3"}
        fontSize={"sm"}
        color={"#7c7b78"}
        textAlign={width > 900 ? "left" : "center"}
        pt={"150px"}
        textTransform={"uppercase"}
        px={width > 900 ? "15px" : "0"}
      >
        New Product
      </Text>
      <Text
        textAlign={width > 900 ? "left" : "center"}
        as={"h1"}
        fontSize={"40px"}
        color={"#fff"}
        px={width > 900 ? "15px" : "0"}
      >
        XX99 MARK II
      </Text>
      <Text
        textAlign={width > 900 ? "left" : "center"}
        as={"h1"}
        fontSize={"40px"}
        color={"#fff"}
        px={width > 900 ? "15px" : "0"}
      >
        HEADPHONES
      </Text>
      <Text
        textAlign={width > 900 ? "left" : "center"}
        as={"p"}
        fontSize={"18px"}
        color={"#7c7b78"}
        w={"30%"}
        pt={"15px"}
        mx={width > 900 ? "0px" : "auto"}
        px={width > 900 ? "15px" : "0"}
      >
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </Text>
      <Flex
        w={"100vw"}
        pt={"15px"}
        justifyContent={width > 900 ? "flex-start" : "center"}
      >
        <Link
          color="white"
          w="max-content"
          backgroundColor="#d87d4a"
          p={"15px 30px"}
          fontSize="15px"
          borderRadius="5px"
          to="/headphones/xx99-mark-two-headphones"
          alignSelf="center"
          as={RouterLink}
          mx={width > 900 ? "15px" : "0"}
          textTransform={"uppercase"}
        >
          See Product
        </Link>
      </Flex>
    </Box>
  );
}

export default HeadPhone;
