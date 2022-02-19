import * as React from 'react';

export default function SingleClub({ club }) {

    const handleReadMore = (e) => {
        if (e.target.innerText === 'Read More...') {
            document.getElementById(`desc-${club.id}`).classList.remove("cardReadLess");
            document.getElementById(`desc-${club.id}`).classList.add("cardReadMore");
            e.target.innerText = 'Read Less...';
        } else {
            document.getElementById(`desc-${club.id}`).classList.add("cardReadLess");
            document.getElementById(`desc-${club.id}`).classList.remove("cardReadMore");
            e.target.innerText = 'Read More...';
        }
    }
    return (
        <div className="card clubCard">
            <img className="card-img-top" src={club.club_logo} alt={`${club.club_name} `} />
            <div className="card-body">
                <h5 className="card-title ">{club.club_name} </h5>
                <p id={`desc-${club.id}`} className="card-text cardReadLess">{club.club_des}
                </p>
                <button className="btn btn-primary" onClick={handleReadMore}>Read More...</button>

            </div>

        </div>
    );
}
