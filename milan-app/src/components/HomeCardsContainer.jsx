import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/HomeCardsContainer.css";

import handImg from "../assets/pictures/hand.png";
import connectImg from "../assets/pictures/connect.png";
import serveImg from "../assets/pictures/serve.png";
import bgBottom from "../assets/pictures/bg-bottom.png";

const HomeCardsContainer = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<div id="body-section">

			<div
				className="contents content_0"
				data-aos="fade-right"
				data-aos-duration="500"
			>
				<div className="container">
					<h2 className="content_head">WHAT DO WE DO ? </h2>

					<hr className="new1" />

					<h3 className="content_head2">We conjugate help and need </h3>

					<p className="content_p">
						It is a platform where we try and bring together all the
						various NGOs and Clubs and potential donors across the
						world and connect them to the right communities so that
						people like you and I can send and receive help to and
						from our desired communities.
					</p>
				</div>
			</div>

			<img
				className="img_0"
				src={handImg}
				alt=""
				data-aos="fade-left"
				data-aos-duration="500"
			/>

			<div
				className="contents content_1"
				data-aos="fade-right"
				data-aos-duration="500"
			>
				<div className="container">
					<h2 className="content_head">WE CONNECT PEOPLE</h2>

					<hr className="new1" />

					<h3 className="content_head2">
						Milan unites more than a million people
					</h3>

					<p className="content_p">
						Together, we see a world where people unite and take
						action to create lasting change – across the globe, in
						our communities, and in ourselves.
					</p>
				</div>
			</div>

			<img
				className="img_1"
				src={connectImg}
				alt=""
				data-aos="fade-left"
				data-aos-duration="500"
			/>

			<div
				className="contents content_2"
				data-aos="fade-right"
				data-aos-duration="500"
			>
				<div className="container">
					<h2 className="content_head">WE SERVE THE WORLD </h2>

					<hr className="new1" />

					<h3 className="content_head2">We don't discriminate</h3>
					<p className="content_p">
						Our help is not limited to a definite country or a
						definite race, we bring forth the world before you. Just
						name the people you want to serve and we will connect
						you right away
					</p>
				</div>
			</div>

			<img
				className="img_2"
				src={serveImg}
				alt=""
				data-aos="fade-left"
				data-aos-duration="500"
			/>

			<div
				className="contents content_3 "
				data-aos="fade-right"
				data-aos-duration="500"
			>
				<div className="container">
					<h2 className="content_head">WE EDUCATE THE WORLD </h2>

					<hr className="new1" />

					<h3 className="content_head2">
						Education should not come at a price
					</h3>
					<p className="content_p">
						Bare necessities are not enough to ensure life. The
						right way to living is earning by oneself. Here we will
						even let you to volunteer yourself towards various
						vocational trainings to ensure a better future for the
						people in need.
					</p>
				</div>
			</div>

            <img src={bgBottom} alt="" id="bg-bottom"/>
		</div>
	);
};

export default HomeCardsContainer;
