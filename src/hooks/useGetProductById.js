import { useEffect, useState } from "react";
import { useProductCategories } from "../contexts/ProductsCategoriesProvider";

function useGetProductById(id, productName) {
  const [isLoading, setIsLoading] = useState(false);
  const { category, product, setProduct, BASE_URL } = useProductCategories();
  useEffect(
    function () {
      setIsLoading(true);
      async function fetchProductById() {
        try {
          console.log("hello");
          let [product] = await category.filter((product) => product.id === id);
          product = { ...product, quantity: 1 };

          setProduct(product);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
      async function fetchProductByName() {
        setIsLoading(true);
        try {
          const response = await fetch(BASE_URL);
          const data = await response.json();
          let [product] = data.filter(
            (product) => product.slug === productName
          );
          product = { ...product, quantity: 1 };
          setProduct(product);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }

      if (category.length > 0 && id) {
        fetchProductById();
      } else {
        fetchProductByName();
      }
    },
    [id, category, setProduct, BASE_URL, productName]
  );
  return { product, isLoading };
}

export default useGetProductById;
