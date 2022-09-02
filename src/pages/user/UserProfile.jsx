import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import { UpdateUser } from "../../service/MilanApi";
import Cookies from "js-cookie";

export default function UserProfile() {
	document.title = "Milan | User Profile"
	const Navigate = useNavigate()
	const [isEmailValid, setIsEmailValid] = useState(false)
	const [credentials, setCredentials] = useState({
		email: "",
		oldPassword: "",
		newPassword: "",
	})

	const handleChange = e => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value })
		if (e.target.name === "email" && e.target.value.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")) {
			setIsEmailValid(true)
		}
	}

	const handleLogout = () => {
		Cookies.remove("token");
		Navigate("/user/login")

	}

	const handleSubmit = e => {
		e.preventDefault()
		alert("Updating...")
		const Data = UpdateUser(credentials)

		Data.then(response => {
			if (response?.data.message) {
				handleLogout()
			} else {
				setCredentials({ email: "", oldPassword: "", newPassword: "" })
			}
		})
	}

	return (
		<>
			<Navbar />

			<section className="vh-100">
				<div className="container py-5 h-100">
					<div className="row d-flex align-items-center justify-content-center h-100">
						<div className="col-md-8 col-lg-7 col-xl-6">
							<img
								src="https://www.getillustrations.com/packs/plastic-illustrations-scene-builder-pack/scenes/_1x/accounts%20_%20man,%20workspace,%20desk,%20laptop,%20login,%20user_md.png"
								className="img-fluid"
								alt="Phone"
							/>
						</div>

						<div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
							<form style={{ width: "auto" }} onSubmit={handleSubmit}>
								<h2 style={{ letterSpacing: "1px", marginBottom: "2rem" }}>Update User profile</h2>
								<div className="form-outline mb-4">
									<label htmlFor="email" className="col-form-label col-form-label-lg" style={{ fontFamily: "Open Sans, sans-serif" }}>
										Enter email address
									</label>
									<input
										type="email"
										className="form-control form-control-lg"
										id="email"
										aria-describedby="emailHelp"

										name="email"
										value={credentials.email}
										onChange={handleChange}
										required
									/>
								</div>
								<div className="form-outline mb-4">
									<label htmlFor="oldPassword" className="col-form-label col-form-label-lg" style={{ fontFamily: "Open Sans, sans-serif" }}>
										Enter previous password
									</label>
									<input
										type="password"
										className="form-control form-control-lg"
										id="oldPassword"
										name="oldPassword"
										style={{ fontFamily: "Open Sans, sans-serif" }}
										value={credentials.oldPassword}
										onChange={handleChange}
										required
									/>
								</div>
								<div className="form-outline mb-4">
									<label htmlFor="newPassword" className="col-form-label col-form-label-lg" style={{ fontFamily: "Open Sans, sans-serif" }} >
										Enter new password
									</label>
									<input
										type="password"
										className="form-control form-control-lg"
										id="newpPassword"
										name="newPassword"
										style={{ fontFamily: "Open Sans, sans-serif" }}
										value={credentials.newPassword}
										onChange={handleChange}
										required
									/>
								</div>
								<br />
								<div
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<button
										type="submit"
										className="btn btn-lg btn-block"
										disabled={credentials.newPassword.length <= 4 || credentials.oldPassword.length <= 4 || !isEmailValid}
										style={{ backgroundColor: "#89b5f7", margin: 10 }}
									>
										Update
									</button>
									<br />
									<button onClick={handleLogout} className="btn btn-lg btn-block" style={{ backgroundColor: "#89b5f7" }}>
										Logout
									</button>
								</div>
								<br></br> <br></br>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
