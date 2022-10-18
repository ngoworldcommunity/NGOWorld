import React, { useEffect, useState } from "react";
import SingleClub from "../../components/SingleClub";
import "../../styles/ClubsPage.css";
import clubs_banner from "../../assets/pictures/clubs-banner.svg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { GetAllClubs } from "../../service/MilanApi";
import Loading from "../../components/Loading";

const ClubsPage = () => {
  document.title = "Milan | Clubs";
  const [clubData, setClubData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchClubData = async () => {
      setLoading(true);
      const response = await GetAllClubs();
      setClubData(response);
      setLoading(false);
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
          <h1 className="mb-2">Clubs and communities !</h1>
          <p>
            Here are some clubs you can follow, you can attend club events and
            even get notified about it once you subscribe !
          </p>
        </div>
      </div>

      <hr className="container" />
      <div className="cards justify-content-center">
        {loading ? (
          <Loading />
        ) : (
          <>
            {clubData.map((club) => {
              return <SingleClub key={club._id} club={club} />;
            })}
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ClubsPage;
