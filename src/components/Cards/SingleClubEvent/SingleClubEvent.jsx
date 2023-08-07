// import React, { useState, useEffect } from "react";
// import ClubUpperImage from "../assets/pictures/ClubUpperImage.svg";
// import { useNavigate } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
// import "../styles/ClubsPage.css";
// import Button from "./Button/GlobalButton/Button";

// export default function SingleClubEvent({ club, type, event }) {
//   const [location, setLocation] = useState("");

//   useEffect(() => {
//     const parseEventLocation = () => {
//       try {
//         if (event.Eventlocation) {
//           const { name, city, state } = JSON.parse(event.Eventlocation).data
//             .properties;
//           const formattedName = `${name}, ${city}, ${state}`;
//           setLocation(formattedName);
//         }
//       } catch {
//         setLocation("");
//       }
//     };

//     parseEventLocation();
//   }, [event]);

//   const nav = useNavigate();

//   const cardButtonHandler = () => {
//     nav(`/clubs/${club._id}`);
//   };

//   return (
//     <>
//       <div className="clubspage_card" onClick={cardButtonHandler}>
//         <div className="clubspage_card_imgdiv">
//           <img src={ClubUpperImage} alt="woman sitting in a lotus pose" />
//         </div>
//         <div className="clubspage_card_textdiv">
//           <p className="clubspage_card_name">
//             {type === "events" ? event.Eventname : club.name}
//           </p>
//           <p className="clubspage_card_tag">
//             {type === "events" ? event.Eventdate : club.tagLine}
//           </p>
//           <p className="clubspage_card_address">
//             {type === "events" && location ? location : null}
//           </p>
//           {/* <p className='clubspage_card_tag' >{type === "events" ? event.Eventdescription : club.tagLine}</p> */}
//           <Button className="clubspage_card_button" variant="outline">
//             View
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";
import Button from "../../Button/GlobalButton/Button";
import "./SingleClubEvent.css";

const SingleClubEvent = ({ item }) => {
  console.log(item);
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
          <Button variant="solid">Donate</Button>
          <Button variant="outline">Read More</Button>
        </div>
      </div>
    </>
  );
};

export default SingleClubEvent;
