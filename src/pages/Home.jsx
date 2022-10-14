import React, { useState } from 'react';
import {
  Banner,
  Navbar,
  Footer,
  DonateBanner,
  HomeCardsContainer,
  EventsBanner,
  LoginBanner,
  ClubBanner,
} from '../components';
import Cookies from 'js-cookie';
import { Helmet } from 'react-helmet-async';

const AuthState = () => {
  const [login, setLogin] = useState(
    Cookies.get('token') || Cookies.get('club'),
  );
  return login;
};
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Milan | Home</title>
        <meta
          name="description"
          content="Welcome to the homepage of Milan, a hub for Users to collaborate with NGOs, Charities and more."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <Navbar></Navbar>

      {AuthState() && <Navbar />}
      {AuthState() ? <LoginBanner /> : <Banner />}
      <HomeCardsContainer />
      <DonateBanner />
      {Cookies.get('club') ? <ClubBanner /> : <EventsBanner />}
      <Footer />
    </>
  );
};

export default Home;
