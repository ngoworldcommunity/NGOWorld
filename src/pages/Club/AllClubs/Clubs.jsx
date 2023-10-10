import React, { useEffect } from "react";

import Navbar from "../../../components/Navbar/Navbar";
import SingleClubEvent from "../../../components/Cards/SingleClubEvent/SingleClubEvent";
import Footer from "../../../components/Footer/Footer";
import "./Clubs.css";
import Header from "../../../components/PageHeader/Header";
import useSWR from "swr";
import fetcher from "../../../utils/Fetcher";
import { clubEndpoints } from "../../../assets/data/ApiEndpoints";
import ComponentHelmet from "../../../utils/ComponentHelmet";

const Clubs = () => {
  const { data: clubs } = useSWR(clubEndpoints.all, fetcher);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ComponentHelmet type="Clubs" />
      <Navbar />

      <main className="container">
        <div className="clubspage_main_parent">
          <Header type="clubs" />

          <ul className="clubspage_cardsdiv">
            {clubs?.map((club) => (
              <SingleClubEvent key={club?._id} item={club} />
            ))}
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Clubs;
