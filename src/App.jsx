import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  UserRegister,
  UserLogin,
  UserProfile,
  ClubRegister,
  ClubLogin,
  ClubProfile,
  Clubs,
  Events,
  Shop,
  Error404,
  ContactUs,
  Donate,
} from "./pages/route";
import MilanState from "./context/MilanState";
import "./styles/App.css";
import BacktoTop from "../src/components/Button/BacktoTop/BacktoTop.jsx";

const App = () => {
  return (
    <>
      <MilanState>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/user/register" element={<UserRegister />} />
            <Route exact path="/user/login" element={<UserLogin />} />
            <Route exact path="/user/profile" element={<UserProfile />} />

            <Route exact path="/clubs" element={<Clubs />} />
            <Route exact path="/clubs/login" element={<ClubLogin />} />
            <Route exact path="/clubs/register" element={<ClubRegister />} />
            <Route exact path="/clubs/profile" element={<ClubProfile />} />
            <Route exact path="/events" element={<Events />} />

            <Route exact path="/shop" element={<Shop />} />

            <Route exact path="/contact" element={<ContactUs />} />
            <Route exact path="/donateus" element={<Donate />} />
            <Route path={"/*"} element={<Error404 />} />
          </Routes>
        </Router>
        <BacktoTop />
      </MilanState>
    </>
  );
};

export default App;
