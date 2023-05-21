import * as React from "react";
import ClubUpperImage from "../assets/pictures/ClubUpperImage.svg";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "../styles/ClubsPage.css";
import Button from "./Button";

export default function SingleClubEvent({ club, type, event }) {
  const nav = useNavigate();

  const cardButtonHandler = () => {
    nav(`/clubs/${club._id}`);
  };

  return (
    <>
      <div className="cp_card" onClick={cardButtonHandler}>
        <div className="cp_card_imgdiv">
          <img src={ClubUpperImage} alt="" />
        </div>
        <div className="cp_card_textdiv">
          <p className="cp_card_name">
            {type === "events" ? event.Eventname : club.name}
          </p>
          <p className="cp_card_tag">
            {type === "events" ? event.Eventdate : club.tagLine}
          </p>
          <p className="cp_card_address">
            {type === "events" ? event.Eventlocation : null}
          </p>
          {/* <p className='cp_card_tag' >{type === "events" ? event.Eventdescription : club.tagLine}</p> */}
          <Button className="cp_card_button" variant="outline">
            View
          </Button>
        </div>
      </div>
    </>
  );
}
