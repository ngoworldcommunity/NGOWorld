import React from "react";
import Button from "../../Button/GlobalButton/Button";
import "./SingleClubEvent.css";

const SingleClubEvent = ({ item }) => {
  return (
    <>
      <div className="sc_parent">
        <div className="sc_header">
          <h1>{item?.name || item?.Eventname}</h1>
          <img src="https://i.ibb.co/FXwG2MH/pict-large.jpg" alt="" />
        </div>

        <div className="sc_body">
          <p>{item?.tagLine}</p>
        </div>

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
      </div>
    </>
  );
};

export default SingleClubEvent;
