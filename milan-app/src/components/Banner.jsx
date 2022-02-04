import React from 'react';
import BannerBg from "../assets/pictures/milanBg.jpg";
import "../styles/Banner.css";
import "../pages/clubs/ClubsRegister";
import { useNavigate } from 'react-router-dom';


const Banner = () => {

    const navigate = useNavigate();
    const HandelNavigate= ()=>{
        
        navigate('user/register')
    }

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
                    <button type="button" class="btn btn-primary" >Clubs</button>
                    <button onClick={HandelNavigate} type="button" class="btn btn-primary">Register</button>
                </div>
            </div>
        </div>
    </>;
};

export default Banner;
