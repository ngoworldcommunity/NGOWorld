import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
// import { Link, useNavigate } from 'react-router-dom';
import "../../styles/EventCreate.css";
import Pic from "../../assets/pictures/bro.png";


export default function EventCreate() {
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
							<form style={{ width: "auto" }} >

								<h2 className="eventCreateWelcome" >
									Hello there!! <br />
									Make your first club event
								</h2>
								<div class="form-outline">
									<label for="eventName" class=" col-form-label col-form-label-lg">
										What's your event called?
									</label>
									<input type="text" class="eventCreateFormInput form-control form-control-md" id="eventName" name="eventName" required />
								</div>

								<div class="form-outline">
									<label for="eventPlace" class=" col-form-label col-form-label-lg">
										Where will the event take place?
									</label>
									<input type="text" class="eventCreateFormInput form-control form-control-md" id="eventPlace" name="eventPlace" required />
								</div>

								<div class="form-outline">
									<label for="eventTime" class=" col-form-label col-form-label-lg">
										When will it take place?
									</label>
									<input type="text" class="eventCreateFormInput form-control form-control-md" id="eventTime" name="eventTime" required />
								</div>

								<div class="form-outline">
									<label for="eventTime" class=" col-form-label col-form-label-lg">
										When will it take place?
									</label>
									<textarea type="text" class="eventCreateFormInput form-control form-control-lg" id="eventTime" name="eventTime"  />
								</div>


								<button
									type="submit"
									className="btn btn-lg btn-block eventCreateSubmit"
								>
									Submit
								</button>
								<br></br> <br></br>




							</form>

						</div>
					</div>

				</div>
			</section >

		</>



	)
}
