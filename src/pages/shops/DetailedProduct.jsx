// import { useEffect, useState } from "react";
import ProductDetailsCard from "../../components/shop/ProductDetails";
import ap1 from "../../assets/pictures/shop/trendingproducts/art/artproduct2.png";
// import { useParams } from "react-router-dom";

const sampleproductSchema = {
  id: "Art01",
  name: "Trust Your Ability",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore adipisci numquam doloribus voluptas cupiditate nam vero nulla dolor aliquid nihil deleniti voluptate id ducimus magnam, perspiciatis minima eveniet, repellendus est consequuntur neque tempora quo accusamus eos? Praesentium nam quaerat delectus obcaecati, exercitationem, nulla rerum tenetur illum pariatur ratione accusantium explicabo?",
  img: ap1,
  price: 100,
  rating: 4,
  category: "Art",
  paymentEndpoint: "",
};

const DetailedProduct = () => {
  // Can use after implementation of getProductDetails()
  // const params = useParams();
  // const [productDetails, setProductDetails] = useState({});

  // const getProductdetails = async () => {
  //   const data = await getProductDetails(params.id);
  //   setProductDetails(data);
  // };

  // useEffect(() => {
  //   getProductdetails();
  // }, [productDetails]);

  return <ProductDetailsCard product={sampleproductSchema} />;
};

export default DetailedProduct;
