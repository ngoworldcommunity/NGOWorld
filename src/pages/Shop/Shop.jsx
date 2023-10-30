import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ComingSoon from "../../components/Cards/ComingSoon/ComingSoon";
import Footer from "../../components/Footer/Footer";

const Shop = () => {
  return (
    <>
      <Navbar />
      <div className="shop_parent">
        <div className="shop_comingSoon">
          <ComingSoon launchitem={`shop's page.`} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
