import React, { useState } from "react";
import "./Feedback.css";
import Button from "../Button/GlobalButton/Button";
export default function Feedback() {
  const [isForm, setIsForm] = useState(false);
  return (
    <div className="feedback">
      {!isForm ? (
        <>
          <h1 className="share">Share your Feedbacks</h1>
          <form action="/clubs" className="rate" method="post">
            <label htmlFor="area">Select area of improvement</label>
            <input
              type="text"
              name="area"
              className="area"
              placeholder="Area of improvement"
            />
            <label htmlFor="area">Description</label>
            <textarea
              id="description"
              placeholder="Enter your description here."
            ></textarea>
            <div className="sub">
              <Button onClick={() => setIsForm(true)}>SUBMIT</Button>
            </div>
          </form>
        </>
      ) : (
        <h4>Thank you for sharing your feedback.</h4>
      )}
    </div>
  );
}
