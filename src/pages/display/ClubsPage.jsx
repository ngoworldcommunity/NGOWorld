import React, { useEffect, useState } from "react";
import SingleClub from "../../components/SingleClub";
import "../../styles/ClubsPage.css";
import clubs_banner from "../../assets/pictures/clubs-banner.svg";
import Navbar from "../../components/Navbar";
import { GetAllClubs } from "../../service/MilanApi";

const ClubsPage = () => {
  const [clubData, setClubData] = useState([]);

  useEffect(() => {
    const fetchClubData = async () => {
      const response = await GetAllClubs();
      setClubData(response);
    };
    fetchClubData();
  }, []);

  return (
    <>
      <Navbar />
      <div id="clubs_banner" className="container">
        <div id="clubsCol2">
          <img src={clubs_banner} alt="clubs banner" className="clubs_img" />
        </div>

        <div
          id="clubscol_1"
          className="d-flex flex-column justify-content-center align-items-start"
        >
          <h2 className="mb-2">Clubs and communities !</h2>
          <p>
            Here are some clubs you can follow, you can attend club events and
            even get notified about it once you subscribe !
          </p>
        </div>
      </div>

      <hr className="container" />
      <div className="cards justify-content-center">
        {clubData.map((club) => {
          return <SingleClub key={club._id} club={club} />;
        })}
      </div>
    </>
  );
};

export default ClubsPage;
