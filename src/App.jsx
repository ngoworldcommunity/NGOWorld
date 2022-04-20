import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ClubLogin from "./pages/clubs/ClubsLogin";
import ClubRegister from "./pages/clubs/ClubsRegister";
import UserRegister from "./pages/user/UserRegister";
import UserProfile from "./pages/user/UserProfile";
import ClubsPage from "./pages/display/ClubsPage";
import UserLogin from "./pages/user/UserLogin";
import ContactPage from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import MilanState from "./context/MilanState";
import EventCreate from "./pages/clubs/EventCreate";
import EventsPage from "./pages/display/EventsPage";

const App = () => {
  return (
    <>
      <MilanState>

        <Router>
          <Routes>
            {/* //* Home routes */}

            <Route exact path="/" element={<Home />} />

            {/* //* Auth routes - USER*/}

            <Route exact path="/user/register" element={<UserRegister />} />
            <Route exact path="/user/login" element={<UserLogin />} />
            <Route exact path="/user/profile" element={<UserProfile />} />
            {/* //* Auth routes - CLUBS*/}

            <Route exact path="/clubs/login" element={<ClubLogin />} />
            <Route exact path="/clubs/register" element={<ClubRegister />} />

            {/* //* Display Routes */}
            <Route exact path="/display/clubs" element={<ClubsPage />} />
            <Route exact path="/contact" element={<ContactPage />} />
            <Route exact path="/about-us" element={<AboutUs />} />
            <Route exact path='/clubs/createevent' element={<EventCreate />} />
            <Route exact path='/display/events' element={<EventsPage />} />

            {/* //* Donations */}
            {/* <Route exact path='/' element={<Home />} />
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/' element={<Home />} /> */}



          </Routes>
        </Router>
      </MilanState>

    </>
  );
};

export default App;
