import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { Footer, Navbar, SkeletonCard } from "../../components/shared";
import ClubCard from "../../components/shared/cards/club/ClubCard";
import { clubEndpoints } from "../../static/ApiEndpoints";
import ComponentHelmet from "../../utils/ComponentHelmet";
import fetcher from "../../utils/Fetcher";
import "./Clubs.css";

const Clubs = () => {
  const { data: clubs, isLoading:loading } = useSWR(clubEndpoints.all, fetcher);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ComponentHelmet type="Clubs" />
      <Navbar />

      <main className="container">
        <div className="clubspage_main_parent">
          <div className="clubspage_cardsdiv">
            {loading ? (
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-evenly",
                }}
              >
                {" "}
                <SkeletonCard /> <SkeletonCard /> <SkeletonCard />{" "}
                <SkeletonCard />{" "}
              </div>
            ) : (
              clubs?.map((club, id) => <ClubCard club={club} key={id} />)
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Clubs;
