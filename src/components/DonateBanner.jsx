import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../styles/DonateBanner.css";
import donateImg from "../assets/pictures/donate-banner.png";
import { useNavigate } from "react-router-dom";

const DonateBanner = () => {

	var nav = useNavigate();
	const handleDonate = () => {
		nav("/donateus");
	}
	const [theme , setTheme] = useState("light-theme");
  const toggleTheam = () => {
    if (theme === "dark-theme"){
      setTheme("light-theme");
    }else{
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
	return (
		<div className="donate">
			<div id="donate-banner"
				className="d-flex justify-content-evenly"
			>
				<div
					id="donateCol1"
					className="d-flex flex-column justify-content-center align-items-start me-5"
				>
					<h1 className="mb-4">You can help us too !!</h1>
					<p>Happiness increases when you share your love.</p>{" "}
					<p>So why not help millions by sharing your love ?</p>


					<button type="button" className="mt-4 button_animation" onClick={() => { handleDonate() }} > Share your love ❤️</button>
				</div>
				<div id="donateCol2">
					<img src={donateImg} alt="" className="donateImg" />
				</div>
			</div>
		</div>
	);
};

export default DonateBanner;
