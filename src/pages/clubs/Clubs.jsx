import React, { useEffect } from "react";
import useSWR from "swr";
import { Footer, Navbar } from "../../components/shared";
import ClubCard from "../../components/shared/cards/club/ClubCard";
import { clubEndpoints } from "../../static/ApiEndpoints";
import ComponentHelmet from "../../utils/ComponentHelmet";
import fetcher from "../../utils/Fetcher";
import "./Clubs.css";

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
          <div className="clubspage_cardsdiv">
            {clubs?.map((club, id) => (
              <ClubCard club={club} key={id} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Clubs;
