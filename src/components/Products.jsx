import React from "react";
import '../styles/Products.css';
import ProductsCard from "./ProductsCard";

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
