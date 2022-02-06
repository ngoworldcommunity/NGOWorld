import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import registerImg from "../../assets/pictures/register.jpg";
import "../../styles/UserRegister.css";

export default function UserRegister() {
	const [credentials, setCredentials] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		address: "",
		pin: "",
	});

	const handleOnChange = (event) => {
		setCredentials({
			...credentials,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(credentials);
		console.log("Form submitted");
	};

	return (
		<div id="userRegister">
			<Navbar />
			<div className="container py-5 h-100">
				<div className="row d-flex align-items-center justify-content-center h-100">
					{/* Image column */}
					<div id="img-col" className="col-md-8 col-lg-7 col-xl-6">
						<img
							className="img-fluid"
							src="https://www.getillustrations.com/packs/plastic-illustrations-scene-builder-pack/scenes/_1x/accounts%20_%20man,%20workspace,%20desk,%20laptop,%20login,%20user_md.png"
							alt="Phone"
						/>
					</div>

					{/* Form column */}
					<div id="form-col" className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <h2>Register Here</h2>
						<form onSubmit={handleSubmit}>
							{/* <div id="name"> */}
							<div className="form-outline mb-2 form-group">
								<label className="col-form-label col-form-label-md" htmlFor="firstName">First Name</label>
								<input
									type="text"
									className="form-control"
									id="firstName"
									name="firstName"
									value={credentials.firstName}
									onChange={handleOnChange}
									placeholder="First name"
                                    required
								/>
							</div>
							<div className="form-outline mb-2 form-group">
								<label className="col-form-label col-form-label-md" htmlFor="lastName">Last Name</label>
								<input
									type="text"
									className="form-control"
									id="lastName"
									name="lastName"
									value={credentials.lastName}
									onChange={handleOnChange}
									placeholder="Last name"
                                    required
								/>
							</div>
							{/* </div> */}
							<div className="form-outline mb-2 form-group">
								<label className="col-form-label col-form-label-md" htmlFor="email">Email address</label>
								<input
									type="email"
									className="form-control"
									id="email"
									name="email"
									value={credentials.email}
									onChange={handleOnChange}
									placeholder="name@example.com"
                                    required
								/>
							</div>
							<div className="form-outline mb-2 form-group">
								<label className="col-form-label col-form-label-md" htmlFor="password">Password</label>
								<input
									type="password"
									className="form-control"
									id="password"
									name="password"
									value={credentials.password}
									onChange={handleOnChange}
									placeholder="Password"
                                    required
								/>
							</div>
							<div className="form-outline mb-2 form-group">
								<label className="col-form-label col-form-label-md" htmlFor="address">Address</label>
								<textarea
									className="form-control"
									id="address"
									name="address"
									value={credentials.address}
									onChange={handleOnChange}
									rows="2"
									placeholder="Address"
                                    required
								></textarea>
							</div>
							<div className="form-outline mb-2 form-group">
								<label className="col-form-label col-form-label-md" htmlFor="pin">PIN Code</label>
								<input
									type="text"
									className="form-control"
									id="pin"
									name="pin"
									value={credentials.pin}
									onChange={handleOnChange}
									placeholder="Pincode"
                                    required
								/>
							</div>
							<div id="links">
								<button className="btn btn-lg btn-block" type="submit">
									Sign Up
								</button>
								<p>
									Already have an account?{" "}
									<a href="/">Sign In</a>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
