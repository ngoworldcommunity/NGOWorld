import react from "react";
import "../styles/Events.css";
import eventCuate from "../assets/pictures/eventCuate.png";

const EventsBanner = () => {
  return (
    <div id="events-banner">
      <div className="image">
        <img src={eventCuate} alt="events-image" />
      </div>
      <div className="content">
        <h1>Check out our events!!</h1> <br />
        <p>
          All our partnered NGOs , hosts various events be it educational,
          cleaning mother earth, funding events, health camps and many more !!
        </p>
        <p>Join us at the events, and help the community !! </p>
        <br />
        <button>Explore</button>
      </div>
    </div>
  );
};

export default EventsBanner;
