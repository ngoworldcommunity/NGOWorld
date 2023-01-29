import "../../styles/Products.css";
import ProductsCard from "../Cards/ProductsCard";
import allproducts from "../../pages/shops/Shop_Data";

const Products = () => {
  return (
    <>
      <div className="container">
        <div className="products_mainparent">
          <div className="products_subparent">
            <div className="products_header">
              <h1>PRODUCTS</h1>
              <hr />
            </div>

            <div className="products_carddiv">
              {allproducts.map((product, index) => {
                return <ProductsCard product={product} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
