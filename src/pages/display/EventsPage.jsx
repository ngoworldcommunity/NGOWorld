import React, { useEffect, useState } from "react";
import SingleClub from "../../components/SingleClub";
import "../../styles/ClubsPage.css";
import Navbar from "../../components/Navbar";
import { GetAllClubs, GetAllEvents } from "../../service/MilanApi";
import SingleEvent from "../../components/SingleEvent";

const EventsPage = () => {

    const [clubData, setClubData] = useState([]);

    useEffect(() => {
        const fetchClubData = async () => {
            const response = await GetAllEvents();
            console.log(response);
            setClubData(response);
        };
        fetchClubData();
    }, []);


    return (
        <>

            <Navbar />
            <div className="cards justify-content-center">
                {clubData.map((club) => {
                    return <SingleEvent key={club._id} club={club} />;
                })}
            </div>
        </>
    )
}

export default EventsPage