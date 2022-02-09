import React, { useState } from "react";
import { FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "../../styles/UserLogin.css"


function UserLogin() {
	function UserImage() {
		return (
			<div className="col-md-8 col-lg-7 col-xl-6">
				<img
					className="img-fluid"
					alt="Phone"
					style={{ width: "auto" }}
					src="https://www.getillustrations.com/packs/plastic-illustrations-scene-builder-pack/scenes/_1x/accounts%20_%20man,%20workspace,%20desk,%20laptop,%20login,%20user_md.png"
				></img>
			</div>
		);
	}

	function Anchor(props) {
		return (
			<div>
				<p>
					{props.para}
					<Link to={props.link}>{props.details}</Link>
				</p>
			</div>
		);
	}

	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	const [isEmailValid, setIsEmailValid] = useState(false);

	const handleChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
		if (
			e.target.name === "email" &&
			e.target.value.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")
		)
			setIsEmailValid(true);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(credentials);
		console.log("Form submitted");
	};

	return (
		<>
			<Navbar />

			<section class="vh-100">
				<div class="container py-5 h-100">
					<div class="row d-flex align-items-center justify-content-center h-100">
						<div class="col-md-8 col-lg-7 col-xl-6">
							<img src="https://www.getillustrations.com/packs/plastic-illustrations-scene-builder-pack/scenes/_1x/accounts%20_%20man,%20workspace,%20desk,%20laptop,%20login,%20user_md.png" class="img-fluid" alt="Phone" />
						</div>

						<div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
							<form style={{ width: "auto" }} onSubmit={handleSubmit}>

								<h2 style={{ letterSpacing: "1px" }}>Log in</h2>
								<div class="form-outline mb-4">
									<label for="exampleInputEmail1" class=" col-form-label col-form-label-lg">Email address</label>

									<input type="email" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={credentials.email} onChange={handleChange} required />

								</div>

								<div class="form-outline mb-4">
									<label for="exampleInputPassword1" class="col-form-label col-form-label-lg">Password</label>

									<input type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" name="password" value={credentials.password} onChange={handleChange} required />

								</div>
								<div class="form-check">
									<input type="checkbox" class="form-check-input" id="exampleCheck1" />
									<label class="form-check-label" for="exampleCheck1">Remember me</label>
								</div>
								<br />


								<button
									type="submit"
									className="btn btn-lg btn-block"
									disabled={
										credentials.password.length <= 4 ||
										!isEmailValid
									}
									style={{ backgroundColor: "#89b5f7" }}
								>
									Login
								</button>
								<br></br> <br></br>
								<Anchor
									para=""
									details="Forgot password?"
									link="#"
									className="text-muted"
								/>
								<Anchor
									para="Don't have an account? "
									details="Register here"
									link="/user/register"
									className="link-info"
								/>



							</form>

						</div>
					</div>

				</div>
			</section >

		</>



	);
}

export default UserLogin;
