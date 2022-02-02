import React from "react";
import Navbar from "../../components/Navbar";
import registerImg from "../../assets/pictures/register.jpg";
import "../../styles/UserRegister.css";
export default function UserRegister() {
	return (
		<div id="userRegister">
			<Navbar />
			<div className="container">
				<div id="section1">
					<img src={registerImg} alt="" />
					<h1>Join us at MILAN...and help millions!</h1>
				</div>

				<div id="section2">
					<h2>Register Now!</h2>
					<form>
						<div id="name">
							<div className="form-group">
								<label htmlFor="firstName">First Name</label>
								<input
									type="text"
									className="form-control"
									id="firstName"
									placeholder="First name"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="lastName">Last Name</label>
								<input
									type="text"
									className="form-control"
									id="lastName"
									placeholder="Last name"
								/>
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="inputEmail">Email address</label>
							<input
								type="email"
								className="form-control"
								id="inputEmail"
								placeholder="name@example.com"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="inputPassword">Password</label>
							<input
								type="password"
								className="form-control"
								id="inputPassword"
								placeholder="Password"
							/>
						</div>
						<div class="form-group">
							<label for="inputAddress">Address</label>
							<textarea
								class="form-control"
								id="inputAddress"
								rows="2"
								placeholder="Address"
							></textarea>
						</div>
						<div className="form-group">
							<label htmlFor="inputPincode">PIN Code</label>
							<input
								type="text"
								className="form-control"
								id="inputPincode"
								placeholder="Pincode"
							/>
						</div>
						<div id="links">
							<button className="btn" type="submit">
								Sign Up
							</button>
                            <p>
                                Already have an account? <a href="">Sign In</a>
                            </p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
