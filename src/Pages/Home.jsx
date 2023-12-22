import BestGear from "../components/BestGear/BestGear";
import Footer from "../components/Footer/Footer";
import HeadPhone from "../components/HeadPhones/HeadPhone";
import ProductCategories from "../components/Products/ProductCategories";
import Speaker from "../components/Speakers/Speaker";
import Speakerzx9 from "../components/Speakers/Speakerzx9";

function Home() {
  return (
    <>
      <HeadPhone />
      <ProductCategories />
      <Speaker />
      <Speakerzx9 flexDirection={"row"} productName={"product-zx7-speaker"} />
      <Speakerzx9
        flexDirection={"row-reverse"}
        productName={"product-yx1-earphones"}
      />
      <BestGear my={"50px"} />
      <Footer />
    </>
  );
}

export default Home;
