import React from "react";
import { ComingSoon, Navbar } from "../components/shared";

const Trending = () => {
  return (
    <>
      <Navbar />
      <div className="shop_parent">
        <div className="shop_comingSoon">
          <ComingSoon launchitem={`tending section`} />
        </div>
      </div>
    </>
  );
};

export default Trending;
