import "../styles/Events.css";
import { useState } from "react";
import { useEffect } from "react";
import eventCuate from "../assets/pictures/eventCuate.png";
import { useNavigate } from "react-router-dom";

const EventsBanner = () => {
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/display/events");
  };
  const [theme , setTheme] = useState("light-theme");
  const toggleTheam = () => {
    if (theme === "dark-theme"){
      setTheme("light-theme");
    }else{
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
      <div className="event-bg">
        <div id="events-banner" className="d-flex justify-content-evenly">
          <div id="eventsCol1" className="me-4">
            <img src={eventCuate} alt="events" className="eventsImg" />
          </div>
          <div
            id="eventsCol2"
            className="d-flex flex-column justify-content-center"
          >
            <h1 className="mb-4">Check out our events!!</h1>
            <p>
              All our partnered NGOs , hosts various events be it educational,
              cleaning mother earth, funding events, health camps and many more !!
            </p>
            <p>Join us at the events, and help the community !! </p>
            <button
              className="mt-4 button_animation"
              onClick={(e) => {
                handleNavigate(e);
              }}
            >
              Explore 🧭
            </button>
          </div>
        </div>
      </div>
  );
};

export default EventsBanner;
