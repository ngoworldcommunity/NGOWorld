import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Products from "../../components/shop/Products";
import "../../styles/ShopLanding.css";

const ShopLanding = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      <div className="container">
        <div className="shop_main_parent">
          <div className="shop_subparent">
            <div className="shop_textdiv">
              <p className="shop_header1">Shop for charity !</p>
              <p className="shop_header2">
                Welcome to our shop. Anything you buy from here helps out the
                charities. We don&apos;t take anything from the profit.
              </p>
            </div>

            <div className="shop_buttonsdiv">
              <Link to={"/shop/art"} style={{ textDecoration: "none" }}>
                <button className="btn btn-grad">
                  Checkout our art collections
                </button>
              </Link>

              <Link to={"/shop/decors"} style={{ textDecoration: "none" }}>
                <button className="btn btn-grad">
                  Checkout our home decors
                </button>
              </Link>

              <Link to={"/shop/handmade"} style={{ textDecoration: "none" }}>
                <button className="btn btn-grad">
                  Handmade items (50% off 🎉)
                </button>
              </Link>
            </div>
          </div>

          <div className="products_header">
            <h1>Trending products </h1>
            <hr />
          </div>

          <Products category="art" isTrending={true} />
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default ShopLanding;
