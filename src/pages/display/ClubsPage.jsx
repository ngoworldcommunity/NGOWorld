import React, { useEffect, useState } from "react";
import SingleClub from "../../components/SingleClub";
import "../../styles/ClubsPage.css";
import Navbar from "../../components/Navbar";
import { GetAllClubs } from "../../service/MilanApi";

const ClubsPage = () => {
	const [clubData, setClubData] = useState([]);

	useEffect(() => {
		const fetchClubData = async () => {
			const response = await GetAllClubs();
			setClubData(response);
		};
		fetchClubData();
	}, []);

	return (
		<>
			<Navbar />
			<div className="cards justify-content-center">
				{clubData.map((club) => {
					return <SingleClub key={club._id} club={club} />;
				})}
			</div>
		</>
	);
};

export default ClubsPage;
