import React from "react";
import "./RateUs.css";
import Navbar from "../../components/Navbar/Navbar";
export default function RateUs() {
  function sub(e) {
    // const btn = document.querySelector("button");
    const post = document.querySelector(".post");
    const widget = document.querySelector(".star-widget");
    // const editBtn = document.querySelector(".edit");

    e.preventDefault();
    widget.style.display = "none";
    post.style.display = "block";
  }
  function editt() {
    const widget = document.querySelector(".star-widget");
    const post = document.querySelector(".post");
    widget.style.display = "block";
    post.style.display = "none";
  }
  return (
    <>
      <Navbar />
      <div className="container2">
        <div className="post">
          <div className="text">Thanks For rating us!</div>
          <div onClick={editt} className="edit">
            EDIT
          </div>
        </div>
        <div className="star-widget">
          <input type="radio" name="rate" id="rate-5" />
          <label htmlFor="rate-5" className="fas fa-star"></label>
          <input type="radio" name="rate" id="rate-4" />
          <label htmlFor="rate-4" className="fas fa-star"></label>
          <input type="radio" name="rate" id="rate-3" />
          <label htmlFor="rate-3" className="fas fa-star"></label>
          <input type="radio" name="rate" id="rate-2" />
          <label htmlFor="rate-2" className="fas fa-star"></label>
          <input type="radio" name="rate" id="rate-1" />
          <label htmlFor="rate-1" className="fas fa-star"></label>
          <form>
            <header></header>
            <div className="textarea">
              <textarea
                cols="30"
                placeholder="Describe your experience.."
              ></textarea>
            </div>
            <div className="btn">
              <button onClick={(e) => sub(e)} type="submit">
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
