import { Box, Flex, Text, Link, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import useWidth from "../../hooks/useWidth";
import { useRef } from "react";
import useSectionHidden from "../../hooks/useSectionHidden";

function Speakerzx9({ flexDirection, productName }) {
  const { width } = useWidth();
  const section = useRef(null);
  useSectionHidden([section], { root: null, threshold: 0.5 }, [
    "section-translateX",
    "section-visible",
  ]);
  return (
    <Flex
      overflowX={"hidden"}
      w={"100%"}
      flexDir={`${width > 600 ? flexDirection : "column-reverse"}`}
      gap={"10px"}
      justifyContent={"center"}
      alignItems={"center"}
      bg={"var(--gray)"}
      my={"50px"}
      h={"max-content"}
    >
      <Flex
        gap={"10px"}
        w={"50%"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        textAlign={"center"}
      >
        <Text fontSize={"20px"} textTransform={"uppercase"} color={"#000"}>
          {productName.replace("product-", "").replace(/-/g, " ")}
        </Text>
        <Box
          _hover={{ bg: "#000", color: "#fff" }}
          bg={"#fff"}
          color={"#000"}
          p={"8px 40px"}
          borderRadius={"8px"}
          w={"max-content"}
          border={"1px solid #000"}
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
      <Flex
        ref={section}
        w={"50%"}
        className={"section-translateX section-visible"}
      >
        <Image
          h={"100%"}
          srcSet={`/images/${productName}/desktop/image-product.jpg 1920w, /images/${productName}/tablet/image-product.jpg 800w, /images/${productName}/mobile/image-product.jpg 480w`}
          sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1920px"
          alt={"img"}
        ></Image>
      </Flex>
    </Flex>
  );
}

export default Speakerzx9;
