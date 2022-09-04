import React, { useState } from "react";
import "../styles/ContactUs.css";
import Navbar from "../components/Navbar";
import contactImage from "../assets/pictures/contactUs.svg";
import { Contact } from "../service/MilanApi";
import { ToastContainer, toast } from "react-toastify";

const ContactUs = () => {
	document.title = "Milan | Contact Us";
	const initialState = { firstName: "", lastName: "", email: "", message: "" };
	const [formData, setFormData] = useState(initialState);
	const [isEmailValid, setIsEmailValid] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value });
		if (
			e.target.id === "email" &&
			e.target.value.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")
		) {
			setIsEmailValid(true);
		}
	};

	const handleSubmit = () => {
		// validation
		if (
			formData.firstName &&
			formData.lastName &&
			isEmailValid &&
			formData.message
		) {
			Contact(formData, toast);
			setFormData(initialState);
		} else {
			toast.warn("Resolve errors in form");
		}
	};

	return (
		<>
			<Navbar />
			<ToastContainer />
			<section className="vh-100">
				<div className="container py-5 h-100">
					<div className="row d-flex align-items-center justify-content-center h-100">
						<div className="contact-img col-md-8 col-lg-7 col-xl-6">
							<img src={contactImage} className="img-fluid" alt="Contact-Us" />
						</div>
						<div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
							<h2 style={{ letterSpacing: "1px" }}>Have something to say?</h2>
							<div className="inputs">
								<h2 style={{ letterSpacing: "1px", marginBottom: "2rem" }}>
									Reach out to us !
								</h2>
								<label
									htmlFor="Full Name"
									className="col-form-label col-form-label-lg"
									style={{ fontFamily: "Open Sans, sans-serif" }}
								>
									Enter your name
								</label>
								<div className="d-flex flex-column flex-md-row name">
									<input
										type="text"
										placeholder="First name"
										id="firstName"
										value={formData.firstName}
										className="form-control form-control-lg me-md-2"
										onChange={handleChange}
										autoFocus
									/>
									<input
										type="text"
										placeholder="Last name"
										id="lastName"
										value={formData.lastName}
										className="form-control form-control-lg ms-md-2"
										onChange={handleChange}
									/>
								</div>
								<label
									htmlFor="email"
									className="col-form-label col-form-label-lg"
									style={{ fontFamily: "Open Sans, sans-serif" }}
								>
									Email address
								</label>
								<input
									type="email"
									placeholder="Email"
									id="email"
									value={formData.email}
									onChange={handleChange}
									className="form-control form-control-lg"
								/>
								<label
									htmlFor="message"
									className="col-form-label col-form-label-lg"
									style={{ fontFamily: "Open Sans, sans-serif" }}
								>
									Enter your message
								</label>
								<textarea
									type="text"
									placeholder="Message"
									id="message"
									rows="4"
									cols="50"
									value={formData.message}
									onChange={handleChange}
									className="form-control form-control-lg"
								/>
								<button
									type="submit"
									onClick={handleSubmit}
									className="submit-btn btn py-2 mb-3"
								>
									Just Send
									<svg
										style={{
											height: "20px",
											width: "20px",
											transform: "rotate(-40deg)",
										}}
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-arrow-right"
										viewBox="0 0 16 16"
									>
										<path
											fillRule="evenodd"
											d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
											fill="#fffff"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactUs;
