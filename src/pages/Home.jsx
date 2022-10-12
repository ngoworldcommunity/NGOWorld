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

const AuthState = () => {
  const [login, setLogin] = useState(
    Cookies.get('token') || Cookies.get('club'),
  );
  return login;
};
const Home = () => {
  document.title = 'Milan | Home';
  return (
    <>
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
