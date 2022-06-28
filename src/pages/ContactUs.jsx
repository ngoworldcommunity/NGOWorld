import React from "react";
import "../styles/ContactUs.css";
import Navbar from "../components/Navbar";
import contactImg from "../assets/pictures/contactusImage.png";

const ContactUs = () => {
	return (
		<>
			<Navbar />
			<div className="contact-us-container">
				<div className="contact-us-form">
					<h3>Have something to say ? <br /> Contact us !!!</h3>
					<div className="text-field-div">
						<div className="text-field-container">
							<label htmlFor="first-name">Your First Name</label>
							<input
								type="text"
								placeholder="First Name"
								id="first-name"
							/>
						</div>
						<div className="text-field-container">
							<label htmlFor="last-name">Your Last Name</label>
							<input
								type="text"
								placeholder="Last Name"
								id="last-name"
							/>
						</div>
					</div>
					<div className="text-field-div">
						<div className="text-field-container">
							<label htmlFor="email-address">Your Email Address</label>
							<input
								type="email"
								placeholder="Email Address"
								id="email-address"
							/>
						</div>
					</div>
					<div className="text-field-div">
						<div className="text-field-container">
							<label htmlFor="question">Enter you message</label>
							<textarea 
								id="question" 
								name="question" 
								rows="4" 
								cols="50"
								placeholder="Enter your message"
							/>
						</div>
					</div>
					<button>Just Send
					<svg style={{height: "20px", width: "20px", color: "rgb(255, 255, 255)", transform: "rotate(-40deg)"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" fill="#fffff"></path> </svg>
					</button>
				</div>
			</div>

		</>
	);
};

export default ContactUs;
