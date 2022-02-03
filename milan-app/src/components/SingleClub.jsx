import * as React from 'react';

export default function SingleClub(props) {

    const handleReadMore = (e) => {
        if (e.target.innerText === 'Read More...') {
            document.getElementById(`desc-${props.id}`).classList.remove("cardReadLess");
            document.getElementById(`desc-${props.id}`).classList.add("cardReadMore");
            e.target.innerText = 'Read Less...';
        } else {
            document.getElementById(`desc-${props.id}`).classList.add("cardReadLess");
            document.getElementById(`desc-${props.id}`).classList.remove("cardReadMore");
            e.target.innerText = 'Read More...';
        }
    }
    return (
        <div className="card">
            <img className="card-img-top" src={props.club_logo} alt={`${props.club_name} `} />
            <div className="card-body">
                <h5 className="card-title ">{props.club_name} </h5>
                <p id={`desc-${props.id}`} className="card-text cardReadLess">{props.club_des}
                </p>
                <button className="btn btn-primary" onClick={handleReadMore}>Read More...</button>

            </div>

        </div>
    );
}
