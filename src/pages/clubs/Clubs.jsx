import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ClubCard, Footer, Loading, Navbar } from "../../components/shared";
import { getClubs } from "../../integrations/Clubs";
import ComponentHelmet from "../../utils/ComponentHelmet";
import "./Clubs.css";

const Clubs = () => {
  const { data: clubs, isLoading } = useQuery({
    queryKey: ["clubsData"],
    queryFn: getClubs,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  return (
    <>
      <ComponentHelmet type="Clubs" />
      <Navbar />

      <main className="container">
        <div className="clubspage_main_parent">
          <div className="clubspage_cardsdiv">
            {isLoading ? (
              <Loading />
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
