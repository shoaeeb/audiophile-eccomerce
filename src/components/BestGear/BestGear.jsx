import { Flex, Image, Text } from "@chakra-ui/react";
import useWidth from "../../hooks/useWidth";
function BestGear({ my }) {
  const { width } = useWidth();
  return (
    <Flex
      w={"full"}
      my={my}
      bg={"#fff"}
      flexDir={width > 800 ? "row" : "column-reverse"}
      justifyContent={"center"}
      alignItems={"center"}
      px={"20px"}
    >
      <Flex
        w={"100%"}
        flexDir={"column"}
        gap={"15px"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        px={"10%"}
      >
        <Text
          textTransform={"uppercase"}
          color={"#000"}
          as={"h1"}
          fontSize={"50px"}
        >
          BRINGING YOU THE{" "}
          <Text color={"var(--orange)"} as="span">
            Best
          </Text>{" "}
          AUDIO GEAR
        </Text>
        <Text as={"p"} color={"#000"} fontSize={"20px"}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Text>
      </Flex>
      <Flex w={"100%"}>
        <Image
          h={"100%"}
          w={"100%"}
          srcSet={
            "/images/shared/desktop/image-best-gear.jpg 1920w, /images/shared/tablet/image-best-gear.jpg  800w, /images/shared/tablet/image-best-gear.jpg  480w"
          }
          sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1920px"
          alt={"img"}
        />
      </Flex>
    </Flex>
  );
}

export default BestGear;
