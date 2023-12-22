import { Flex } from "@chakra-ui/react";
import { useProductCategories } from "../../contexts/ProductsCategoriesProvider";
import Product from "./Product";

function Products() {
  const { category } = useProductCategories();
  console.log(category);
  return (
    <Flex
      w={"100%"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {category.map((item, index) => (
        <Product
          item={item}
          flexDirection={`row${index % 2 == 0 ? "" : ""}`}
          key={item.id}
        />
      ))}
    </Flex>
  );
}

export default Products;
