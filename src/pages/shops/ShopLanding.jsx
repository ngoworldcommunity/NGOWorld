import React from "react";
import Store from "../../components/Store";
import Navbar from "../../components/Navbar";
import data from "./SHOP_DATA";
import { Products, Cards } from "../../components/Products";



const ShopLanding = () => {

    const cards = data.map(item => {
        return (
         <Cards
            key = {item.id}
            image = {item.image}
            title = {item.title}
            price = {item.price}
          />   
        )
    })



    return (
        <>
          <Navbar />
          <Store /> 
          <Products /> 
          {cards}
        </>
    )
}

export default ShopLanding