import React, { useEffect, useState } from "react";
import SingleClub from "../../components/SingleClub";
import "../../styles/ClubsPage.css";
import Navbar from "../../components/Navbar";
import { GetAllClubs, GetAllEvents } from "../../service/MilanApi";
import SingleEvent from "../../components/SingleEvent";
import Eventspic from "../../assets/pictures/EventsPagefloating.svg";

const EventsPage = () => {
  const [clubData, setClubData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchClubData = async () => {
      const response = await GetAllEvents();
      setClubData(response);
    };
    fetchClubData();
  }, []);

  return (
    <>
      <Navbar />

      <div className="eventspageintro_parent d-flex flex-column flex-lg-row justify-lg-content-center">
        {/* No code here for now*/}
      </div>

      {/* Banner Portion Code  */}
      
      <div id="event_banner" className="container d-flex flex-column flex-lg-row text-center text-lg-start">
        <div id="eventCol_2" className="d-none d-sm-block">
          <img src={Eventspic} alt="" className="event_image" />
        </div>

        <div
          id="eventCol_1"
          className="d-flex flex-column justify-content-center me-5"
        >
          <h2 className="mb-4">Welcome to the events page !!</h2>
          <p>
            All our partnered NGOs , hosts various events be it educational,
            cleaning mother earth, funding events, health camps and many more !!
          </p>
          <p>Join us at the events, and help the community !</p>
        </div>
      </div>

      <hr className="container" />

      <div className="cards justify-content-center">
        {clubData.map((club) => {
          return <SingleEvent key={club._id} club={club} />;
        })}
      </div>
    </>
  );
};

export default EventsPage;