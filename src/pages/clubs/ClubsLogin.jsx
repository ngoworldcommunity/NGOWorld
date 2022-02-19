import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import "../../styles/ClubLogin.css";
import Pic from "../../assets/pictures/clubs-login.png";
import { LoginClub } from "../../service/MilanApi";


function ClubLogin() {
	const Navigate = useNavigate();

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

		const Data = LoginClub(credentials);

		Data.then(response => {
			if(response.data.success==true){
				alert("Logged you in!!");
				Navigate("/");
			  }
			else if(response.data.success==false){
				alert("Please input valid credentials");
				setCredentials({
					email:"", 
					password:""
				});
			}
		})
		.catch(err=>{			
			console.log(err);
		})
	};

	return (
		<>
			<Navbar />

			<section class="vh-100">
				<div class="container py-5 h-100">
					<div class="row d-flex align-items-center justify-content-center h-100">
						<div class="col-md-8 col-lg-7 col-xl-6">
							<img src={Pic} width="90%" alt='profile-img'></img>
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
									style={{ backgroundColor: "#C996CC" }}
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
									link="/clubs/register"
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

export default ClubLogin;