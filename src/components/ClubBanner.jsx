import React from "react";
import clubCuate from "../assets/pictures/clubCuate.svg";

export default function ClubBanner() {
  return (
    <div id="events-banner" className="d-flex justify-content-evenly">
      <div id="eventsCol1" className="me-4">
        <img src={clubCuate} alt="events" className="eventsImg" />
      </div>
      <div
        id="eventsCol2"
        className="d-flex flex-column justify-content-center"
      >
        <h2 className="mb-4">Create an event !!</h2>
        <p>Hello club !!</p>
        <p>Go ahead and create an event !!</p>
        <p>
          Our users sure are excited to join and participate in one be it
          educational, cleaning mother earth, funding events, health camps and
          many more !!
        </p>
        <button className="mt-4">Create</button>
      </div>
    </div>
  );
}
