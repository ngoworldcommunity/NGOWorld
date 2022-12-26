import { Helmet } from "react-helmet-async";
// import { Navbar, Products, ShopHeader } from "../../components";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Products from "../../components/shop/Products";
import ShopHeader from "../../components/shop/ShopHeader";

const ShopLanding = () => {
  return (
    <>
      <Helmet>
        <title>Milan | Shop</title>
        <meta
          name="description"
          content="Welcome to Milan's shop. Anything you buy from here helps out the charities."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <ShopHeader />
      <Products />
    </>
  );
};

export default ShopLanding;
