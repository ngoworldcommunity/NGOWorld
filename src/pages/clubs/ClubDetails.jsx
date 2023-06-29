import React, { useEffect, useRef } from "react";
import "../../styles/ClubDetails.css";
import { useParams } from "react-router-dom";
import displayRazorpay from "../../service/PaymentGateway";
import Modal from "../../components/Modal";
import useSWR from "swr";
import { defaultfetcher } from "../../utils/fetcher";

function ClubDetailsCard() {
  const params = useParams();
  const inputRef = useRef(null);
  const [showPaymodal, setshowPaymodal] = React.useState(false);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });

  const { data: clubdetails } = useSWR(
    `${import.meta.env.VITE_MILANAPI}/display/clubs?id=${params.id}`,
    defaultfetcher,
  );

  const closePayModal = () => {
    setshowPaymodal(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="clubdetails_parent">
        <div className="clubdetails_imagediv">
          <img src="https://i.ibb.co/88dTvtR/We-love-earth.png" alt={clubdetails.name} />
        </div>

        <div className="clubdetails_textdiv">
          <h1>{clubdetails?.name}</h1>
          <h2>{clubdetails?.tagLine}</h2>

          <div className="clubdetails_description flexed">
            <p>
              <span>Find us at : </span> {clubdetails?.address}
            </p>
            <p>{clubdetails?.description}</p>

            <button
              className="btn"
              onClick={() => {
                setshowPaymodal(true);
                document.body.style.overflow = "hidden";
              }}
            >
              Help us grow
            </button>
          </div>
        </div>
      </div>

      <div className="clubdetails_description  clubdetails_description_landscape">
        <p>
          <span>Find us at : </span> {clubdetails?.address}
        </p>
        <p>{clubdetails?.description}</p>

        <button className="btn">Help us grow</button>
      </div>

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
      )}
    </>
  );
}

export default ClubDetailsCard;
