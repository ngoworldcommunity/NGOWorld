import React from "react";
import star from '../assets/pictures/star.png'
import face from '../assets/pictures/girlface.svg'
import art from '../assets/pictures/artpiece.svg'
import '../styles/Card.css'


const Cards = () =>{
    return(
    <div className="card-group">
        <div className="cardart">
            <img src={face} className="art" />
            <div><img src={star} className='star' /></div>
            <h6>Art: A girl's dream</h6>
            <h6>$20</h6>
        </div>

        <div className="cardart">
            <img src={art} className="art" />
            <div><img src={star} className='star' /></div>
            <h6>Art: Celebrate Inside</h6>
            <h6>$20</h6>
        </div>

         <div className="cardart">
            <img src={face} className="art" />
            <div><img src={star} className='star' /></div>
            <h6>Art: A girl's dream</h6>
            <h6>$20</h6>
        </div>

        <div className="cardart">
            <img src={art} className="art" />
            <div><img src={star} className='star' /></div>
            <h6>Art: Celebrate Inside</h6>
            <h6>$20</h6>
        </div>
    </div>
    )
}

export default Cards