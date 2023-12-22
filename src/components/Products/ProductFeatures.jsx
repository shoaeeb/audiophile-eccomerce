import { Flex, Text } from "@chakra-ui/react";

function ProductFeatures({ features }) {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      w={"100%"}
      flexDir={"column"}
    >
      <Text color={"#000"} fontSize={"15px"}>
        {features}
      </Text>
    </Flex>
  );
}

export default ProductFeatures;
