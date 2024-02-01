import React from "react";
import Button from "../../Button/GlobalButton/Button";
import "./SingleClubEvent.css";

const SingleClubEvent = ({ item }) => {
  return (
    <>
      <li className="sc_parent">
        <div className="sc_header">
          <h2>{item?.name || item?.Eventname}</h2>
          <img src="https://i.ibb.co/FXwG2MH/pict-large.jpg" alt="" />
        </div>

        <p className="sc_body">{item?.tagLine}</p>

        <div className="sc_cta">
          <Button variant="solid" className="sc_ctabutton">
            Donate
          </Button>
          <Button
            variant="outline"
            to={`/club/${item?.slug}`}
            className="sc_ctabutton"
          >
            Read More
          </Button>
        </div>
      </li>
    </>
  );
};

export default SingleClubEvent;
