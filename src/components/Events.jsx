import react from "react";
import "../styles/Events.css";
import eventCuate from "../assets/pictures/eventCuate.png";
import { useNavigate } from "react-router-dom";

const EventsBanner = () => {
	const navigate = useNavigate()

	const handleNavigate = (e) => {
		e.preventDefault();
		navigate("/display/events")
	}

	return (
		<div id="events-banner" className="d-flex justify-content-evenly">
			<div id="eventsCol1" className="me-4">
				<img
					src={eventCuate}
					alt="events"
					className="eventsImg"
				/>
			</div>
			<div
				id="eventsCol2"
				className="d-flex flex-column justify-content-center"
			>
				<h2 className="mb-4">Check out our events!!</h2>
				<p>
					All our partnered NGOs , hosts various events be it
					educational, cleaning mother earth, funding events, health
					camps and many more !!
				</p>
				<p>Join us at the events, and help the community !! </p>
				<button className="mt-4" onClick={(e) => { handleNavigate(e) }}>Explore</button>
			</div>
		</div>
	);
};

export default EventsBanner;
