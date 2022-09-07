import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const apiURL = [
  "https://milan-jwoc.herokuapp.com",
  "http://localhost:5000",
  "https://milan-server.vercel.app",
  "https://milan-server.adaptable.app",
];
const API = apiURL[2];

export default async function displayRazorpay(money) {
  const data = await fetch(`${API}/payment/razorpay`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(money),
  }).then((t) => t.json());

  const options = {
    key: process.env.RAZORPAY_KEY_ID,
    currency: data.currency,
    amount: data.amount,
    name: "Milan",
    description: "A hub for NGOs",
    image: "https://i.ibb.co/JC4g0ZD/favicon.png",
    order_id: data.id,
    handler: function (response) {
      // alert("PAYMENT ID ::" + response.razorpay_payment_id);
      // alert("ORDER ID :: " + response.razorpay_order_id);
      toast("🌈 Thanks for the donation !", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    prefill: {
      name: "Tamal Das",
      email: "gyansujan69@gmail.com",
      contact: "9073097510",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
