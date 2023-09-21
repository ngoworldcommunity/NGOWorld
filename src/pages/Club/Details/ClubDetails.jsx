import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
// import displayRazorpay from "../../../../service/PaymentGateway";
// import Modal from "../../../../components/Modal";
import useSWR from "swr";
import fetcher from "../../../utils/Fetcher";
import { clubEndpoints } from "../../../assets/data/ApiEndpoints";
import { GoLocation } from "react-icons/go";
import "./ClubDetails.css";

function ClubDetailsCard() {
  const params = useParams();
  console.log(params);
  // const inputRef = useRef(null);
  // const [showPaymodal, setshowPaymodal] = React.useState(false);

  // const loadScript = (src) => {
  //   return new Promise((resolve) => {
  //     const script = document.createElement("script");
  //     script.src = src;
  //     script.onload = () => {
  //       resolve(true);
  //     };
  //     script.onerror = () => {
  //       resolve(false);
  //     };
  //     document.body.appendChild(script);
  //   });
  // };

  // useEffect(() => {
  //   loadScript("https://checkout.razorpay.com/v1/checkout.js");
  // }, []);

  const { data: clubdetails } = useSWR(
    clubEndpoints.bySlug(params.slug),
    fetcher,
  );

  console.log(clubdetails);

  // const closePayModal = () => {
  //   setshowPaymodal(false);
  //   document.body.style.overflow = "auto";
  // };

  return (
    <>
      <Navbar />

      {/* 

      {showPaymodal && (
        <Modal onClose={closePayModal}>
          <div className="paymodal">
            <h1 style={{ marginTop: 0 }}>Every donations matter</h1>
            <p>
              We are a non-profit organization and we don&apos;t take any profit
              from the donations.
            </p>

            <div className="input-group ">
              <span className="input-group-text"> ₹ </span>
              <input
                type="number"
                className="form-control"
                aria-label="Amount (to the nearest rupee)"
                placeholder="Enter an amount"
                ref={inputRef}
              />
            </div>

            <button
              className="btn"
              onClick={() => {
                const money = inputRef.current.value;
                if (money === null) return;
                displayRazorpay(money);
              }}
            >
              Pay now
            </button>
          </div>
        </Modal>
      )} */}

      <div className="cd_parent">
        <div className="cd_main">
          <div className="cd_leftdiv">
            <img src="https://i.ibb.co/FXwG2MH/pict-large.jpg" alt="" />
          </div>

          <div className="cd_rightdiv">
            <h1>{clubdetails?.name}</h1>
            <p>{clubdetails?.tagLine}</p>

            <div>
              <h2>What do we do ?</h2>
              <p>{clubdetails?.description}</p>
            </div>

            <GoLocation style={{ color: "#e26959" }} />
            <h2>Find us at</h2>
            <p>{clubdetails?.address}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClubDetailsCard;
