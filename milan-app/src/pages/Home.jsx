import React from 'react';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DonateBanner from '../components/DonateBanner';
import HomeCardsContainer from '../components/HomeCardsContainer';

const Home = () => {
    return (<>
        <Navbar />
        <Banner />
        <HomeCardsContainer />
        <DonateBanner />
        <Footer />
    </>);
};

export default Home;
