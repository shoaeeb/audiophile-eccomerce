import { Flex, Image, Box, Text, Button } from "@chakra-ui/react";
import useWidth from "../../hooks/useWidth";
import { useParams, useSearchParams } from "react-router-dom";
import useGetProductById from "../../hooks/useGetProductById";
import { numberToCurrency } from "../../utils/helpers";
import ProductFeatures from "./ProductFeatures";
import ProductIncludedItem from "./ProductIncludedItem";
import ProductGallery from "./ProductGallery";
import OthersProduct from "./OthersProduct";
import ProductCategories from "./ProductCategories";
import BestGear from "../BestGear/BestGear";
import Footer from "../Footer/Footer";
import { useState } from "react";
import { useProductCategories } from "../../contexts/ProductsCategoriesProvider";
import { useShowToast } from "../../hooks/useShowToast";
function IndividualProduct() {
  const { addToCart } = useProductCategories();
  const { width } = useWidth();
  const { product } = useParams();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("prodId");
  const showToast = useShowToast();
  const { product: productDetails } = useGetProductById(Number(id), product);
  const {
    id: prodId,
    name,
    description,
    slug,
    features,
    cartImage,
    gallery,
    includedItems,
    new: newItem,
    shortName,
    others,
    price,
    image,
    categoryImage,
  } = productDetails;
  const flexDirection = "row-reverse";
  const [currQuantity, setCurrQuantity] = useState(Number(1)); //
  function incrementQuantity() {
    setCurrQuantity((currQuantity) => currQuantity + 1);
  }
  function decrementQuantity() {
    if (currQuantity == 1) return;
    setCurrQuantity((currQuantity) => currQuantity - 1);
  }

  function handleAddToCart() {
    const product = {
      id: Number(prodId),
      name: shortName,
      slug,
      cartImage,
      quantity: currQuantity,
      price,
      categoryImage,
    };
    addToCart(product);
    //back to 1
    setCurrQuantity(1);
    showToast("Success", "Added to cart", "success");
  }
  return (
    <>
      <Flex
        overflowX={"hidden"}
        w={"full"}
        flexDir={`${width > 600 ? flexDirection : "column-reverse"}`}
        alignItems={"center"}
        my={"50px"}
        justifyContent={"center"}
        px={"20px"}
        h={"max-content"}
        py={"15px"}
      >
        <Flex
          gap={"10px"}
          w={"50%"}
          flexDir={"column"}
          justifyContent={"center"}
          textAlign={"center"}
          alignItems={"center"}
        >
          {newItem && (
            <Text
              fontSize={"20px"}
              textTransform={"uppercase"}
              color={"var(--orange)"}
              letterSpacing={"8px"}
            >
              New Product
            </Text>
          )}
          <Text fontSize={"15px"} textTransform={"uppercase"} color={"#000"}>
            {name}
          </Text>
          <Text fontSize={"15px"} color={"#000"}>
            {description}
          </Text>
          <Text>{numberToCurrency(price)}</Text>
          <Box
          // _hover={{ bg: "#000", color: "#fff" }}
          // backgroundColor={"var(--orange)"}
          >
            <Button
              w={"max-content"}
              color={"#fff"}
              p={"8px 40px"}
              borderRadius={"8px"}
              _hover={{ bg: "#000", color: "#fff" }}
              backgroundColor={"var(--orange)"}
              onClick={handleAddToCart}
            >
              Add To Cart
            </Button>
          </Box>
          <Flex
            background={"var(--gray)"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Button
              onClick={decrementQuantity}
              py={"10px"}
              px={"20px"}
              _hover={{ bg: "var(--orange)" }}
            >
              -
            </Button>
            <Text px={"5px"}>{currQuantity}</Text>
            <Button
              onClick={incrementQuantity}
              py={"10px"}
              px={"20px"}
              _hover={{ bg: "var(--orange)" }}
            >
              +
            </Button>
          </Flex>
        </Flex>
        <Flex w={"50%"} justifyContent={"center"} alignItems={"center"}>
          <Image
            h={"300px"}
            srcSet={`${image?.desktop} 1920w, ${image?.tablet} 800w, ${image?.mobile} 480w`}
            sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1920px"
            alt={"img"}
          ></Image>
        </Flex>
      </Flex>
      <Flex
        w={"full"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        flexDir={width > 600 ? "row" : "column"}
        textAlign={"center"}
        px={"20px"}
        h={"100%"}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          flexDir={"column"}
          w={"50%"}
          color={"#000"}
        >
          <Text
            fontSize={"20px"}
            fontWeight={"bold"}
            mb={"10px"}
            textTransform={"uppercase"}
          >
            {" "}
            Features
          </Text>
          <ProductFeatures features={features} />
        </Flex>
        <Flex
          justifyContent={"center"}
          flexDir={"column"}
          alignItems={"center"}
          w={"50%"}
        >
          <Text
            fontWeight={"bold"}
            fontSize={"20px"}
            textTransform={"uppercase"}
            color={"#000"}
          >
            Included Items
          </Text>
          {includedItems?.map((items, index) => (
            <ProductIncludedItem
              quanity={items.quantity}
              item={items.item}
              key={index}
            />
          ))}
        </Flex>
      </Flex>
      {/* gallery */}
      <ProductGallery galleryImages={gallery} />
      {/* others */}
      <OthersProduct others={others} />
      {/* categories */}
      <ProductCategories />
      {/* best gear */}
      <BestGear my={"60px"} />
      {/* footer */}
      <Footer />
    </>
  );
}

export default IndividualProduct;
