import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PageLayout from "./Layout/PageLayout";
import { ProductsCategoriesProvider } from "./contexts/ProductsCategoriesProvider";
import CategoryPage from "./Pages/CategoryPage";
import IndividualProduct from "./components/Products/IndividualProduct";
import { ChakraProvider } from "@chakra-ui/react";
import { alertAnatomy } from "@chakra-ui/anatomy";

import { extendTheme, createMultiStyleConfigHelpers } from "@chakra-ui/react";
import Checkout from "./components/checkout/Checkout";
function App() {
  const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
  };
  const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(alertAnatomy.keys);

  const customSuccess = definePartsStyle({
    container: {
      border: "1px solid",
      borderColor: "teal.200",
      background: "teal.500",
      _dark: {
        borderColor: "teal.600",
        background: "teal.800",
      },
    },
    title: {
      color: "pink.200",
      _dark: {
        color: "pink.200",
      },
    },
  });

  const alertTheme = defineMultiStyleConfig({
    variants: { customSuccess },
  });
  const theme = extendTheme({ config, compontents: { alertTheme } });
  return (
    <ChakraProvider theme={theme}>
      <ProductsCategoriesProvider>
        <PageLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Uncomment the following routes */}
            <Route path="/headphones" element={<CategoryPage />}></Route>
            <Route path="/speakers" element={<CategoryPage />} />
            <Route path="/earphones" element={<CategoryPage />} />
            <Route path="headphones/:product" element={<IndividualProduct />} />
            <Route path="speakers/:product" element={<IndividualProduct />} />
            <Route path="earphones/:product" element={<IndividualProduct />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </PageLayout>
      </ProductsCategoriesProvider>
    </ChakraProvider>
  );
}

export default App;
