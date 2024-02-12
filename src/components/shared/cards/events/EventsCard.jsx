import React from "react";
import "./EventsCard.css";

const EventsCard = () => {
  return (
    <div className="eventscard_parent">
      <img
        src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg"
        alt=""
      />

      <div className="eventscard_body">
        <h1>ISB Alumni Social Impact SIG Initiative</h1>
        <div className="eventscard_date">
          <p>01</p>
          <p>OCT</p>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
