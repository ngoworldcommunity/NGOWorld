import React from "react";
import { Link } from "react-router-dom";
import "../styles/ContactUs.css";
import Navbar from "../components/Navbar";
import contactImg from "../assets/pictures/contactusImage.png";

const ContactUs = () => {
	return (
		<>
			<Navbar />
			<div className="contactUs">
				<div>
					<img
						src={contactImg}
						alt="ContactUs"
						className="contactUsImage"
					/>
				</div>
				<div className="contactUsForm">
					<h1 className="contactUsFormHeader">
						Have something to say ? <br /> Contact us !!!
					</h1>
					<div className="contactUsFormNameInput">
						<input
							type="text"
							placeholder="First Name"
							className="contactUsFNFormInput"
						/>
						<input
							type="text"
							placeholder="Last Name"
							className="contactUsLNFormInput"
						/>
					</div>
					<div className="contactUsFormEmail">
						<input
							type="email"
							placeholder="Enter your email"
							className="contactUsEmailFormInput"
						/>
					</div>
					<div className="contactUsFormMsg">
						<textarea
							rows="6"
							placeholder="Enter your message"
							className="contactUsMsgFormInput"
						/>
					</div>
					<div className="contactUsFormSubmit">
						<button className="contactUsSubmitBtn">Submit</button>
					</div>
				</div>
			</div>
			{/* <div id="contactBottom" className="d-flex justify-content-center mt-5 mb-3">
				<Link to="/" className="text-decoration-none" id="homeLink">
						<i
							className="fa fa-home"
							aria-hidden="true"
						></i>
						<span className="ps-2">
							Return Home
						</span>
				</Link>
			</div> */}
		</>
	);
};

export default ContactUs;
