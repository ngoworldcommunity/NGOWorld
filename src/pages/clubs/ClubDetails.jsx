import React from "react";
import club_details_img from "../../assets/pictures/clubpage-group-discussion.svg";
import "../../styles/ClubDetails.css";

function ClubDetailsCard() {
  return (
    <div className="club_details">
      <div className="club_details_img">
      <img src={club_details_img} />
      </div>
      <div className="club_details_card">
        <div>
        <h1>Welcome to Rotary International</h1>
        <h6>
          <span><i className="fa-solid fa-map-pin"></i></span> Shapoorji
        </h6>
        <p>
          Certain therapies come free of cost. Happiness doesn't really come
          from a Happy Mealat McDonalds always. Hunger doesn't always dissipate
          from feeding oneself to the brim.
        </p>
        <p>
          Come join us to help fill the stomachs that are empty furthermore
          you'll see how their smile can help you unearth happiness in true
          sense.
        </p>
        <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default ClubDetailsCard;
