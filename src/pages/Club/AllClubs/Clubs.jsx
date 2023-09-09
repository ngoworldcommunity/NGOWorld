import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import useSWR from "swr";
import { defaultfetcher } from "../../../utils/Fetcher";
import Navbar from "../../../components/Navbar/Navbar";
import Loading from "../../../components/Loading";
import SingleClubEvent from "../../../components/Cards/SingleClubEvent/SingleClubEvent";
import Footer from "../../../components/Footer/Footer";
import "./Clubs.css";
import Header from "../../../components/PageHeader/Header";
import { clubEndpoints } from "../../../assets/data/ApiEndpoints";

const Clubs = () => {
  const { data: clubs, isLoading } = useSWR(clubEndpoints.all, defaultfetcher);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Milan | Clubs</title>
        <meta
          name="description"
          content="These are the clubs and communities you can follow. You can attend charity/club events and even get notified about them once you subscribe!"
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <Navbar />

      <div className="container">
        <div className="clubspage_main_parent">
          <Header type="clubs" />

          <div className="clubspage_cardsdiv">
            {isLoading ? (
              <Loading />
            ) : (
              <>
                {clubs?.map((club) => (
                  <SingleClubEvent key={club?._id} item={club} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Clubs;
