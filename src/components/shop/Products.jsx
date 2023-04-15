import { useMemo } from "react";
import "../../styles/Products.css";
import ProductsCard from "../Cards/ProductsCard";
import allproducts from "../../assets/data/shop/Shop_Data";

const Products = ({ category, isTrending }) => {
  const selectedProducts = useMemo(() => {
    const shuffledProducts = [...allproducts].sort(() => 0.5 - Math.random());
    const selected = shuffledProducts.slice(0, 5);
    return selected;
  }, [allproducts]);

  return (
    <>
      <div className="container">
        <div className="products_mainparent">
          <div className="products_carddiv">
            {isTrending
              ? selectedProducts.map((product, index) => {
                  return <ProductsCard product={product} key={index} />;
                })
              : allproducts
                  .filter((product) => product.category === category)
                  .map((product, index) => {
                    return <ProductsCard product={product} key={index} />;
                  })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
