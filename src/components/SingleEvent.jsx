import * as React from "react";
import "../styles/SingleEvent.css"
import eventsbanner from "../assets/pictures/singleeventsbanner.svg";

export default function SingleEvent({ club }) {
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
                src={eventsbanner}
                alt={`${club.name} `}
            />
            <div className="card-body text-center">
                <h1 className="card-title">{club.Eventname} </h1>
                <div className="club-info mt-3">
                    <p>{club.Eventdate}</p>
                    <p>{club.Eventlocation}</p>
                </div>



                {club.Eventdescription && (<>

                    <div id={`less${club._id}`} className="desc">
                        {club.Eventdescription.length > 80
                            ? club.Eventdescription.slice(0, 80) + "..."
                            : club.Eventdescription}
                        {club.Eventdescription.length > 80 ? (
                            <span className="seeBtn" onClick={expand}>
                                See more
                            </span>
                        ) : (
                            ""
                        )}
                    </div>
                    <div id={`more${club._id}`} className="hidden desc">
                        {club.Eventdescription}
                        <span className="seeBtn" onClick={contract}>
                            See less
                        </span>

                    </div>

                </>)}

                <button className="btn btn-warning attendeventbtn">Attend Event</button>
            </div>
        </div>
    );
}
