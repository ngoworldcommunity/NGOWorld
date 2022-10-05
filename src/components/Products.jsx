import React from "react";
import '../styles/Products.css';
import ProdcutsCard from "./Cards";

const Products = () => {
    return (
        <div className="group">
            <h1>PRODUCTS</h1>
            <hr/>
            <ProductsCard />
        </div>
    )
}


export default Products
