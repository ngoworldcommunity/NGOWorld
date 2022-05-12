import React from "react";
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

		</>
	);
};

export default ContactUs;
