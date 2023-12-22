import { Text } from "@chakra-ui/react";

function ProductIncludedItem({ quanity, item }) {
  return (
    <Text color={"#000"}>
      <Text as="span" color={"var(--orange)"}>
        {quanity}x{"   "}
      </Text>
      {item}
    </Text>
  );
}

export default ProductIncludedItem;
