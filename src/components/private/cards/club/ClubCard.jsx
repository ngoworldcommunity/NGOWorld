import React from "react";
import { Button } from "../../../shared";
import "./ClubCard.css";

const DetailedClub = ({ club }) => {
  return (
    <>
      <div className="detailedclub_parent">
        <div className="detailedclub_header">
          <h1>{club?.name || club?.Eventname}</h1>
          <img
            src="https://api.freelogodesign.org/assets/thumb/logo/bdd55f703a074abb8bf50c0d3891c0a9_400.png?t=638314396148720000"
            alt=""
          />
        </div>

        <p className="detailedclub_body">{club?.tagLine}</p>

        <div className="detailedclub_cta">
          <Button variant="solid" className="detailedclub_ctabutton">
            Donate
          </Button>
          <Button
            variant="outline"
            to={`/club/${club?.username}`}
            className="detailedclub_ctabutton"
          >
            Read More
          </Button>
        </div>
      </div>
    </>
  );
};

export default DetailedClub;
