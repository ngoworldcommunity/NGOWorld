import React from "react";
import clubCuate from "../../assets/pictures/clubCuate.svg";
import { useNavigate } from "react-router-dom";

export default function ClubBanner() {
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/clubs/createevent");
  };

  return (
    <div id="events-banner" className="d-flex justify-content-evenly">
      <div id="eventsCol1" className="me-4">
        <img src={clubCuate} alt="events" className="eventsImg" />
      </div>
      <div
        id="eventsCol2"
        className="d-flex flex-column justify-content-center"
      >
        <h1 className="mb-4">Create an event !!</h1>
        <p>Hello club !!</p>
        <p>Go ahead and create an event !!</p>
        <p>
          Our users sure are excited to join and participate in one be it
          educational, cleaning mother earth, funding events, health camps and
          many more !!
        </p>
        <button
          className="mt-4"
          onClick={(e) => {
            handleNavigate(e);
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
}
