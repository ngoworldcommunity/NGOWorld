import React, { useState } from "react";
import "./Feedback.css";
export default function Feedback() {
  const [rev, setRev] = useState(false);
  if (!rev) {
    return (
      <>
        <div className="feedback">
          <h1 className="share">Share your Feedbacks</h1>
          <form action="/clubs" className="rate" method="post">
            <label htmlFor="area">Select area of improvement</label>
            <select name="area" id="area">
              <option value="">Select</option>
              <option value="management">Management</option>
              <option value="Donation Methods">Donation Methods</option>
              <option value="ask an expert feature">
                Ask an expert feature
              </option>
              <option value="other">Other</option>
            </select>
            <label htmlFor="area">Description</label>
            <textarea
              id="description"
              placeholder="Enter your description here."
            ></textarea>
            <div className="sub">
              <label htmlFor="upload" className="uploadLabel"></label>
              <input type="file" id="upload" name="upload"></input>
              <button
                onClick={() => setRev(true)}
                className="submit"
                type="submit"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
  return (
    <div className="feedback">
      <h3>Thank you for sharing your feedback</h3>
    </div>
  );
}
