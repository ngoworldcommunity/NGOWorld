import "../../styles/ProductDetails.css";

const FilledStar = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="#ff9529"
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  );
};
const EmptyStar = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="#ccc"
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  );
};

const renderRating = (rating) => {
  return [...Array(5).keys()].map((idx) => {
    return (
      <span key={idx}>{idx < rating ? <FilledStar /> : <EmptyStar />}</span>
    );
  });
};

function ProductDetailsCard({ product }) {
  return (
    <section>
      <div className="container my-5">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-12 m-auto pt-3 text-center">
            <img className="img-fluid" src={product.img} />
          </div>

          <div className="col-sm-12 col-md-12 col-lg-6 col-12 pt-3 mr-4 lg-center-align">
            <h1 className="pt-3">
              <b>{product?.name}</b>
            </h1>

            <div className="pt-2">
              <span className="border border-1 border-warning px-2 py-1 rounded">
                {product?.category}
              </span>

              <span className="mx-2">{renderRating(product?.rating)}</span>
            </div>

            <p className="pt-4">{product?.description}</p>
            <p className="pt-2">
              <b>Price:</b> ₹{product?.price}{" "}
            </p>

            <button className="btn banner_signup_btn pt-3">
              <b>Buy</b>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailsCard;
