import { Helmet } from "../../components/SEO";
import Products from "../../components/shop/Products";
import "../../styles/ShopLanding.css";

const ShopLanding = () => {
  return (
    <>
      <Helmet title="Milan | Shop" />
      <div className="container">
        <div className="shop_main_parent">
          <div className="shop_subparent">
            <div className="shop_textdiv">
              <p className="shop_header1">Shop for charity !</p>
              <p className="shop_header2">
                Welcome to our shop. Anything you buy from here helps out the
                charities. We don't take anything from the profit.
              </p>
            </div>
          </div>

          <Products />
        </div>
      </div>
    </>
  );
};

export default ShopLanding;
