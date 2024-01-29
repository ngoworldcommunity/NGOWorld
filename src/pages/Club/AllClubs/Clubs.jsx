import React, { useEffect, useState } from "react";

import Navbar from "../../../components/Navbar/Navbar";
import SingleClubEvent from "../../../components/Cards/SingleClubEvent/SingleClubEvent";
import Footer from "../../../components/Footer/Footer";
import "./Clubs.css";
import Header from "../../../components/PageHeader/Header";
import useSWR from "swr";
import fetcher from "../../../utils/Fetcher";
import { clubEndpoints } from "../../../assets/data/ApiEndpoints";
import ComponentHelmet from "../../../utils/ComponentHelmet";
import Feedback from "../../../components/Feedback system/Feedback";
import Modal from "../../../components/Modal/Modal";

const Clubs = () => {
  const { data: clubs } = useSWR(clubEndpoints.all, fetcher);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [review, setReview] = useState(false);
  if (review) {
    return (
      <>
        <ComponentHelmet type="Clubs" />
        <Navbar />
        <button onClick={() => setReview(true)}>Share Feedback</button>
        <Modal className="feed" onClose={() => setReview(false)}>
          <Feedback />
        </Modal>
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
  }
  return (
    <>
      <ComponentHelmet type="Clubs" />
      <Navbar />
      {/* <Modal children={<Feedback/>} className='feed'/> */}
      <main className="container">
        <div className="clubspage_main_parent">
          <Header type="clubs" />
          <div className="feedd">
            <button
              className="btn-feed"
              type="button"
              onClick={() => setReview(true)}
            >
              Share Feedback
            </button>
          </div>
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
