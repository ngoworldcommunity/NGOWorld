import React from 'react';
import Banner from '../components/Banner';
import HomeCardsContainer from '../components/HomeCardsContainer';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
    return (<>
        <Navbar />
        <Banner />
        <HomeCardsContainer />
        <Footer />
    </>);
};

export default Home;
