import { useEffect, useState } from "react";
import { useProductCategories } from "../contexts/ProductsCategoriesProvider";

function useSearchProductByCategories(categoryUrl) {
  const [isLoading, setIsLoading] = useState(false);
  const { category, setCategory, BASE_URL } = useProductCategories();

  useEffect(
    function () {
      setIsLoading(true);
      async function fetchProductByCategory() {
        try {
          const response = await fetch(BASE_URL);
          let data = await response.json();
          data = data.filter((product) => product.category === categoryUrl);
          setCategory(data);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
      if (categoryUrl) {
        fetchProductByCategory();
      }
    },
    [categoryUrl, BASE_URL, setCategory]
  );
  return { category, isLoading };
}

export default useSearchProductByCategories;
