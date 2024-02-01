import React, { useEffect } from "react";
import useSWR from "swr";
import { clubEndpoints } from "../../../assets/data/ApiEndpoints";

import { SingleClubEvent } from "../../../components/private";
import { Footer, Header, Navbar } from "../../../components/shared";
import ComponentHelmet from "../../../utils/ComponentHelmet";
import fetcher from "../../../utils/Fetcher";
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
