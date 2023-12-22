import BestGear from "../components/BestGear/BestGear";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProductCategories from "../components/Products/ProductCategories";
import Products from "../components/Products/Products";

function CategoryPage() {
  return (
    <>
      <Header />
      <Products />
      <ProductCategories />
      <BestGear my={"25px"} />
      <Footer />
    </>
  );
}

export default CategoryPage;
