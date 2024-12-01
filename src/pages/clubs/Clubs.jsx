import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ClubCard, Footer, Loading, Navbar } from "../../components/shared";
import { getClubs } from "../../integrations/Clubs";
import ComponentHelmet from "../../utils/ComponentHelmet";
import "./Clubs.scss";

const Clubs = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["clubsData"],
    queryFn: getClubs,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  // demo 20 array of clubs
  const clubs = Array.from({ length: 20 }, (_, i) => ({
    _id: "673ac2814c6e89e58af8ca11",
    userType: "club",
    userName: "tamalcodes",
    name: "God Father Org",
    email: "tamalcodes@gmail.com",
    password: "$2a$10$90vC9McfHXpXpLlzUOFeuulorPR9dIQ2ns37uIP5sX5ehyO5C.Mmm",
    cart: [],
    __v: 0,
  }));

  return (
    <>
      <ComponentHelmet type="Clubs" />
      <Navbar />

      <div className="clubs_parent">
        {isLoading || !clubs || clubs?.length === 0 ? (
          <Loading />
        ) : (
          clubs?.map((club, id) => <ClubCard club={club} key={id} />)
        )}
      </div>

      <Footer />
    </>
  );
};

export default Clubs;
