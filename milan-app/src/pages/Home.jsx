import React from 'react';
import Banner from '../components/Banner';
import HomeCardsContainer from '../components/HomeCardsContainer';
import Navbar from '../components/Navbar';

const Home = () => {
    return (<>
        <Navbar />
        <Banner />
        <HomeCardsContainer />
    </>);
};

export default Home;
