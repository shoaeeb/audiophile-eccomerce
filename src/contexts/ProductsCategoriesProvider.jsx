import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ProductsCategoriesContext = createContext();
function ProductsCategoriesProvider({ children }) {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState({});
  const [cart, setCart] = useLocalStorage([], "cart");
  // const [cart, setCart] = useState([]);
  const BASE_URL = "https://fake-api-eosin-one.vercel.app/products";
  function addToCart(product) {
    if (
      cart.length === 0 ||
      !cart.map((item) => item.id).includes(product.id)
    ) {
      setCart([...cart, { ...product }]);
      return;
    }

    setCart((cart) =>
      cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + product.quantity };
        }
        return item;
      })
    );
  }

  function incrementQuantity(id) {
    setCart((cart) =>
      cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  }
  function decrementQuantity(id) {
    //if we want to decrease the quantity of an item that has a quantity of 1,
    //we remove it from the cart
    if (cart.find((item) => item.id === id).quantity === 1) {
      setCart(cart.filter((item) => item.id !== id));
      return;
    }
    setCart((cart) =>
      cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  }
  return (
    <ProductsCategoriesContext.Provider
      value={{
        category,
        setCategory,
        BASE_URL,
        product,
        setProduct,
        cart,
        setCart,
        addToCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </ProductsCategoriesContext.Provider>
  );
}

function useProductCategories() {
  const context = useContext(ProductsCategoriesContext);
  if (context === undefined) {
    throw new Error(
      "useProductCategories must be used within a ProductsCategoriesProvider"
    );
  }
  return context;
}

export { ProductsCategoriesProvider, useProductCategories };
