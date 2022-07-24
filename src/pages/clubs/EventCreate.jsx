import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import "../../styles/EventCreate.css";
import Events from "../../assets/pictures/CreateEventsPic.svg";


export default function EventCreate() {
	return (
		<>
			<Navbar />

			<section class="vh-100">
				<div class="container py-5 h-100">
					<div class="row d-flex align-items-center justify-content-center h-100">
						<div class="col-md-8 col-lg-7 col-xl-6">
							<img src={Events} width="90%" alt='profile-img'></img>
						</div>

						<div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
							<form style={{ width: "auto" }} >

								<h2 className="eventCreateWelcome" >
									Create an event for your club
								</h2>
								<div class="form-outline">

									<input type="text" class="eventCreateFormInput form-control " id="eventName" name="eventName" required placeholder="What's your event called?" />
								</div>

								<div class="form-outline">

									<input type="text" class="eventCreateFormInput form-control form-control-md" id="eventPlace" name="eventPlace" required placeholder="Where will the event take place?" />
								</div>

								<div class="form-outline">

									<input type="text" class="eventCreateFormInput form-control form-control-md" id="eventTime" name="eventTime" required placeholder="When will it take place?" />
								</div>

								<div class="form-outline">

									<textarea type="text" class="eventCreateFormInput form-control form-control-lg" id="eventTime" name="eventTime" placeholder="Tell us something more about the event" />
								</div>


								<button
									type="submit"
									className="btn  eventCreateSubmit"
								>
									Create
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
