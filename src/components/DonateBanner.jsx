import React from "react";
import "../styles/DonateBanner.css";
import donateImg from "../assets/pictures/donate-banner.png";

const DonateBanner = () => {
	return (
		<div id="donate-banner" 
            className="d-flex justify-content-evenly"
        >
			<div
				id="donateCol1"
				className="d-flex flex-column justify-content-center align-items-start me-5"
			>
				<h2 className="mb-4">You can help us too!!</h2>
				<p>Happiness increases when you share your love.</p>{" "}
				<p>So why not help millions by sharing your love ?</p>
				<button className="mt-4">Share your love ❤️</button>
			</div>
			<div id="donateCol2">
				<img src={donateImg} alt="" className="donateImg" />
			</div>
		</div>
	);
};

export default DonateBanner;
