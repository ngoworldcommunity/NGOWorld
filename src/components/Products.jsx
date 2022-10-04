import React from "react";
import '../styles/Products.css'

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
        <div className="card">
            <img src={props.image} />
            <div className="stars">{props.stars}</div>
            <h6>Art:{props.title}</h6>
            <h6>${props.price}</h6>
        </div>
    )
}


export {Products, Cards}