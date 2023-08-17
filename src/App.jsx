import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  UserProfile,
  ClubProfile,
  Clubs,
  Events,
  Shop,
  Error404,
  ContactUs,
  Donate,
  AuthRegister,
  AuthLogin,
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
            <Route exact path="/user/register" element={<AuthRegister />} />
            <Route exact path="/user/login" element={<AuthLogin />} />
            <Route exact path="/user/profile" element={<UserProfile />} />

            <Route exact path="/clubs" element={<Clubs />} />
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
