import React from "react";
import "../styles/AboutUs.css";
import Navbar from "../components/Navbar";
import abtImg from "../assets/pictures/about-pana.png";
import deba from "../assets/pictures/deba.png";
import parna from "../assets/pictures/parna.png";
import roy from "../assets/pictures/roy.png";
import td from "../assets/pictures/td.png";

export default function AboutUs() {
	return (
		<div>
			<Navbar />
			<div
				id="about"
				className="d-flex justify-content-between align-items-center"
			>
				<div className="abtCol1 me-5">
					<img src={abtImg} alt="" className="abtImg" />
				</div>
				<div className="abtCol2 d-flex flex-column align-items-start ms-5">
					<h1>MILAN</h1>
					<p className="mt-4">
						The word ‘Milan’ when literally translated from its
						colloquial form to English means ‘conjugation’.
					</p>
					<p className="mt-2">
						With Milan we aim at bringing all the various NGOs and
						donors under one single roof to ease the burden of going
						to find their appropriate donors and the appropriate
						communities to donate to. With the help of our search
						filters and ask platform, it becomes easier for the
						people to find their right community to serve.
					</p>
					<h1 className="mt-5">OUR TEAM</h1>
					<div className="abtTeam d-flex mt-4">
						<img src={td} alt="" className="abtMembers me-2" />
						<img src={parna} alt="" className="abtMembers mx-2" />
						<img src={deba} alt="" className="abtMembers mx-2" />
						<img src={roy} alt="" className="abtMembers ms-2" />
					</div>
				</div>
			</div>
		</div>
	);
}
