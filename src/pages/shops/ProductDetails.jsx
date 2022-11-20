import React from "react";

import "../../styles/ProductDetails.css";

import star from "../../assets/pictures/star.png";
import face from "../../assets/pictures/girlface.svg";

const ProductDetails = () => {
  return (
    <div className="product_details">
      <div className="product_details_img">
        <img src={face} className="art" alt="art" />
      </div>
      <div className="product_details_card">
        <div>
          <h1>Celebrate Inside</h1>
          <div>
            <img src={star} className="stars" alt="stars" />
          </div>
          <p className="main-description">
            "Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s"
          </p>
          <p className="sub-description">
            <b>Art By : Rikiha Kundu</b>
          </p>
          <p className="sub-description">
            <b>Price : $20</b>
          </p>
          <button className="buy-now-btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
