import React from "react";
import "../../styles/Products.css";

const ProductsCard = ({ product }) => {
  return (
    <>
      <div className="productcard_mainparent">
        <div className="productcard_subparent">
          <div className="productcard_imgdiv">
            <img src={product.img} alt="" />
          </div>

          <div className="productcard_textdiv">
            <p className="productcard_header1">{product.name}</p>
            <p className="productcard_header2">${product.price} </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
