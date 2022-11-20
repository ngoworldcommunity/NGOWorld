import React from "react";
import star from "../../assets/pictures/star.png";
import face from "../../assets/pictures/girlface.svg";
import art from "../../assets/pictures/artpiece.svg";
import "../../styles/ProductsCard.css";

import { useLocation, useNavigate } from "react-router-dom";

const ProductsCard = () => {
  const location = useLocation();
  const nav = useNavigate();

  const goToProductDetailsPage = () => {
    nav("product/details");
  };

  return (
    <div className="card-group">
      <div className="cardart" onClick={goToProductDetailsPage}>
        <img src={face} className="art" alt="art" />
        <div>
          <img src={star} className="star" alt="start" />
        </div>
        <h6>Art: A girl's dream</h6>
        <h6>$20</h6>
      </div>

      <div className="cardart" onClick={goToProductDetailsPage}>
        <img src={art} className="art" alt="art" />
        <div>
          <img src={star} className="star" alt="star" />
        </div>
        <h6>Art: Celebrate Inside</h6>
        <h6>$20</h6>
      </div>

      <div className="cardart" onClick={goToProductDetailsPage}>
        <img src={face} className="art" alt="art" />
        <div>
          <img src={star} className="star" alt="star" />
        </div>
        <h6>Art: A girl's dream</h6>
        <h6>$20</h6>
      </div>

      <div className="cardart" onClick={goToProductDetailsPage}>
        <img src={art} className="art" alt="art" />
        <div>
          <img src={star} className="star" alt="star" />
        </div>
        <h6>Art: Celebrate Inside</h6>
        <h6>$20</h6>
      </div>
    </div>
  );
};

export default ProductsCard;
