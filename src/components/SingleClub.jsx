import * as React from "react";
export default function SingleClub({ club }) {
	const expand = () => {
		document.getElementById(`less${club._id}`).classList.add("hidden");
		document.getElementById(`more${club._id}`).classList.remove("hidden");
	};

	const contract = () => {
		document.getElementById(`more${club._id}`).classList.add("hidden");
		document.getElementById(`less${club._id}`).classList.remove("hidden");
	};

	return (
		<div className="card clubCard">
			<img
				className="card-img-top club-img"
				src="https://i.ibb.co/0hxWDDD/1.jpg"
				alt={`${club.name} `}
			/>
			<div className="card-body text-center">
				<h3 className="card-title">{club.name} </h3>
				<div className="club-info mt-3">
					<p>{club.email}</p>
					<p>{club.address}</p>
				</div>

				<div id={`less${club._id}`} className="desc">
					{club.description.length > 80
						? club.description.slice(0, 80) + "..."
						: club.description}
					{club.description.length > 80 ? (
						<span className="seeBtn" onClick={expand}>
							See more
						</span>
					) : (
						""
					)}


				</div>
				<div id={`more${club._id}`} className="hidden desc">
					{club.description}
					<span className="seeBtn" onClick={contract}>
						See less
					</span>
				</div>

			</div>
		</div>
	);
}
