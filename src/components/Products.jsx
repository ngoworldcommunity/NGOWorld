import React from "react";
import '../styles/Products.css'
import star from '../assets/pictures/star.png'


const Products = () => {
    return (
        <div className="group">
            <h1>PRODUCTS</h1>
            <hr/>
        </div>
    )
}

const Cards = (props) =>{
    return(
        <div className="card" key={props.id}>
            <img src={`../../assets/pictures/${props.image}`} className="art" />
            <img src={star} className='star' />
            <h6>Art:{props.title}</h6>
            <h6>${props.price}</h6>
        </div>
    )
}


export {Products, Cards}