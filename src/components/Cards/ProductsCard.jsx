import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Products.css";

const ProductsCard = ({ product }) => {
  return (
    <>
      {/* <div className="productcard_mainparent">
        <div className="productcard_subparent">
          <div className="productcard_imgdiv">
            <img src={product.img} alt="" />
          </div>

          <div className="productcard_textdiv">
            <p className="productcard_header1">{product.name}</p>
            <p className="productcard_header2">${product.price} </p>
          </div>
        </div>
      </div> */}

      <Link passHref href={`/products`}>
        <div className="pb_cardmain">
          <div className="pb_cardimgdiv">
            <img src={product.img} alt="" />
          </div>
          <div className="pb_cardtextdiv">
            <p>{product.name}</p>

            <div>
              <p>⭐⭐⭐⭐⭐</p>
              <p className="pb_price">₹ 100</p>
            </div>
          </div>
          <div className="card_cart">
            <img
              src="https://shop-coders.vercel.app/_next/static/media/cart.a9a33008.svg"
              width={32}
              height={32}
              alt="cart"
            />
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductsCard;
