import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ComingSoon from "../../components/Cards/ComingSoon/ComingSoon";

const Shop = () => {
  return (
    <>
      <Navbar />
      <div className="shop_parent">
        <div className="shop_comingSoon">
          <ComingSoon />
        </div>
      </div>
    </>
  );
};

export default Shop;
