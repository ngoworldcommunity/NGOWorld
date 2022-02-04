import React, { useState } from "react";
import { FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";

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

	const [errors, setErrors] = useState({
		formErrors: { email: "", password: "" },
		emailValid: false,
		passwordValid: false,
		formValid: false,
	});

	const validateData = (name, value) => {
		let errorLogs = errors.formErrors;
		let isEmailValid = errors.emailValid;
		let isPasswordValid = errors.passwordValid;

		switch (name) {
			case "email":
				isEmailValid = value.match(
					'^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'
				);
				errors.email = isEmailValid ? "" : "is invalid";
				break;
			case "password":
				isPasswordValid = value.length > 5;
				errors.password = isPasswordValid
					? ""
					: "should be more than 5 characters";
				break;
			default:
		}

		setErrors({
			formErrors: errorLogs,
			emailValid: isEmailValid,
			passwordValid: isPasswordValid,
			formValid: errors.emailValid && errors.passwordValid,
		});
	};

	const handleChange = (e) => {
		setCredentials(
			{ ...credentials, [e.target.name]: e.target.value },
			validateData(e.target.name, e.target.value)
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(credentials);
		console.log("Form submitted");
	};

	return (
		<div className="container py-5 h-100">
			<div className="row d-flex align-items-center justify-content-center h-100">
				<UserImage />

				<div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
					<h2>Log In</h2>
					<form style={{ width: "auto" }} onSubmit={handleSubmit}>
						<div className="form-outline mb-2 form-group">
							<label
								htmlFor="email"
								className="col-form-label col-form-label-md"
							>
								Email
								<input
									id="email"
									name="email"
									type="email"
									value={credentials.email}
									className="form-control"
									style={{ width: "300px" }}
									placeholder="Enter email"
									onChange={handleChange}
									required
								></input>
								<small
									id="emailHelp"
									className="form-text text-muted"
								>
									We'll never share your email with anyone
									else.
								</small>
							</label>
						</div>
						<div className="form-outline mb-2 form-group">
							<label
								htmlFor="password"
								className="col-form-label col-form-label-md"
							>
								Password
								<input
									id="password"
									name="password"
									type="password"
									value={credentials.password}
									className="form-control"
									style={{ width: "300px" }}
									placeholder="Enter password"
									onChange={handleChange}
									required
								></input>
                                <small
									id="passwordHelp"
									className="form-text text-muted"
								>
									Password must be at least 6 characters
								</small>
							</label>
						</div>
						<div className="form-check">
							<input
								type="checkbox"
								className="form-check-input"
							></input>
							<label className="" htmlFor="exampleCheck1">
								Remember me
							</label>
						</div>
						<br></br>
						<button
							type="submit"
							className="btn btn-lg btn-block"
							disabled={!errors.formValid}
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

			<div className="homeIconContainer">
				<FcHome className="homeIcon" style={{ width: "auto" }} />
			</div>
		</div>
	);
}

export default UserLogin;
