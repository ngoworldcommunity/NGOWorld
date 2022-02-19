import React from 'react';
import { Link } from "react-router-dom";
import BannerBg from "../assets/pictures/milanBg.jpg";
import "../styles/Banner.css";

const Banner = () => {
    return <>
        <div className="banner-container" style={{ backGround: BannerBg }}>
            <div className="banner-inner">
                <div className="banner-content">
                    <h3 className="banner-header1">
                        MILAN
                    </h3>
                    <h1 className="banner-subtitle">Where HELP meets NEED</h1>

                </div>

                <div className="banner-Buttons">
                    <Link to="/clubs/login" className="banner-button">
                        <button type="button" className="btn btn-primary">Continue as a Club</button>
                    </Link>
                    <Link to="/user/register">
                        <button type="button" className="btn btn-primary">Continue as an User</button>
                    </Link>
                </div>
            </div>
        </div>
    </>;
};

export default Banner;
