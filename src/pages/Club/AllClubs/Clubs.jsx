import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../../components/Navbar/Navbar";
import SingleClubEvent from "../../../components/Cards/SingleClubEvent/SingleClubEvent";
import Footer from "../../../components/Footer/Footer";
import "./Clubs.css";
import Header from "../../../components/PageHeader/Header";
import { GetAllClubs } from "../../../service/MilanApi";

const Clubs = () => {
  // const { data: clubs, isLoading } = useSWR(clubEndpoints.all, defaultfetcher);
  const [allClubs, setAllClubs] = React.useState([]);

  async function fetcher() {
    const clubs = await GetAllClubs();

    if (clubs?.status === 200) {
      setAllClubs(clubs?.data);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetcher();
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
            {allClubs?.map((club) => (
              <SingleClubEvent key={club?._id} item={club} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Clubs;
