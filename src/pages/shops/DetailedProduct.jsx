//detailed product page
import React, { useEffect, useState } from "react";
import "/src/styles/DetailedProduct.css";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ap1 from "../../assets/pictures/shop/trendingproducts/art/artproduct1.png";
//import allproducts from "../../assets/data/shop/Shop_Data";

const DetailedProduct = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState([]);
  // const product = allproducts.find((product)=> product.slug === slug);
  // const {name,img,price,category} = product;

  useEffect(() => {
    fetch(`http://localhost:5000/product/${slug}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((result) => setProduct(result));
  }, []);

  console.log(product);

  return (
    <>
      <Navbar />
      <div className="singleProduct">
        <div>
          {/* product.productImage */}
          <img src={ap1} alt="" />
        </div>
        <div className="Details">
          <h1>{product.productName}</h1>
          <h5>{product.productDescription}</h5>
          <h4>Type : {product.productType}</h4>
          <h4>${product.productPrice}</h4>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailedProduct;
