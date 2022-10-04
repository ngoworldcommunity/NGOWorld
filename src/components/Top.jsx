import React from "react";
import Landing from '../assets/pictures/shoplanding.svg'
import "../styles/Top.css"

const Top = () => {

    return (
            <div className="store">
                <img src={Landing} alt="shops" className="ShopImg" />
                <div>
                    <h1>Welcome to our store !</h1>
                    <p>We aim at selling you fine artworks, products that would support the local community ! </p>
                    <button>Shop Now</button> 
                </div>
            </div>
    )
}
 

export default Top