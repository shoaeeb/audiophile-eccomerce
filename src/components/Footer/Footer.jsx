import { Flex, Link, Image, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import useWidth from "../../hooks/useWidth";
import { FaceBook, Instagram, Twitter } from "../../constants/constants";

function Footer() {
  const { width } = useWidth();
  return (
    <Flex
      justifyContent={"center"}
      flexDir={"column"}
      py={"20px"}
      w={"full"}
      backgroundColor={"#000"}
    >
      <Flex
        w="100%"
        gap={"5px"}
        flexDir={width > 700 ? "row" : "column"}
        justifyContent={"space-between"}
        px={"5%"}
      >
        <Link to={"/"} as={RouterLink}>
          <Image src={"/images/shared/desktop/logo.svg"} alt="logo" />
        </Link>
        <Flex
          gap={"20px"}
          alignItems={"center"}
          justifyContent={"space-between"}
          color={"white"}
          textTransform={"uppercase"}
          fontSize={"15px"}
          w={"50%"}
        >
          <Link to={"/"} as={RouterLink}>
            Home
          </Link>
          <Link to={"/headphones"} as={RouterLink}>
            Headphones
          </Link>
          <Link to={"/speakers"} as={RouterLink}>
            Speakers
          </Link>
          <Link to={"/earphones"} as={RouterLink}>
            Earphones
          </Link>
        </Flex>
      </Flex>
      <Flex w={"50%"} p={"10px"} fontSize={"15px"} mx={"3.6%"}>
        <Text color={"#fff"}>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </Text>
      </Flex>
      <Flex
        color={"var(--gray)"}
        w={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        fontSize={"16px"}
        px={"4.2%"}
        flexDir={width > 700 ? "row" : "column"}
      >
        <Text>
          Copyright &copy; {new Date().getFullYear()}. All Rights Reserved
        </Text>
        <Flex
          gap={"5px"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <FaceBook />
          <Twitter />
          <Instagram />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Footer;
