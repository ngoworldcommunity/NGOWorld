import React, { useState } from "react"
import "../styles/ContactUs.css"
import Navbar from "../components/Navbar"
import { Contact } from "../service/MilanApi"
import { ToastContainer, toast } from "react-toastify"


const ContactUs = () => {
	const initialState = { firstName: "", lastName: "", email: "", message: "" }
	const [formData, setFormData] = useState(initialState)
	const [isEmailValid, setIsEmailValid] = useState(false)

	const handleChange = e => {
		setFormData({ ...formData, [e.target.id]: e.target.value })
		if (e.target.id === "email" && e.target.value.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"))
			//
			setIsEmailValid(true)
	}

	const handleSubmit = () => {
		// validation
		if (formData.firstName && formData.lastName && isEmailValid && formData.message) {
			Contact(formData, toast)
			setFormData(initialState)
		} else {
			toast.warn("Resolve errors in form")
		}
	}

	return (
		<>
			<Navbar />
			<div className="contact-us-container">
				<ToastContainer />
				<div className="contact-us-form">
					<h3>
						Have something to say ? <br /> Contact us !!!
					</h3>
					<div className="text-field-div">
						<div className="text-field-container">
							<label htmlFor="firstName">Your First Name</label>
							<input type="text" placeholder="First Name" id="firstName" value={formData.firstName} onChange={handleChange} />
						</div>
						<div className="text-field-container">
							<label htmlFor="lastName">Your Last Name</label>
							<input type="text" placeholder="Last Name" id="lastName" value={formData.lastName} onChange={handleChange} />
						</div>
					</div>
					<div className="text-field-div">
						<div className="text-field-container">
							<label htmlFor="email">Your Email Address</label>
							<input type="email" placeholder="Email" id="email" value={formData.email} onChange={handleChange} />
						</div>
					</div>
					<div className="text-field-div">
						<div className="text-field-container">
							<label htmlFor="message">Enter your message</label>
							<textarea id="message" rows="4" cols="50" placeholder="Message" value={formData.message} onChange={handleChange} />
						</div>
					</div>
					<button onClick={handleSubmit}>
						Just Send
						<svg
							style={{ height: "20px", width: "20px", color: "rgb(255, 255, 255)", transform: "rotate(-40deg)" }}
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
		</>
	)
}

export default ContactUs
