import * as React from 'react';

export default function SingleClub(props) {

    return (
        <div className="card">
            <img className="card-img-top" src={props.club_logo} alt={`${props.club_name} `} />
            <div className="card-body">
                <h5 className="card-title">{props.club_name}</h5>
                <p className="card-text">{props.club_des}</p>

            </div>

        </div>
    );
}
