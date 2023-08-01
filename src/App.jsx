import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  ClubLogin,
  ClubProfile,
  ShopLanding,
  ClubRegister,
  ClubsPage,
  UserRegister,
  UserLogin,
  UserProfile,
  ContactPage,
  AboutUs,
  EventCreate,
  EventsPage,
  Donate,
} from "./pages";
import MilanState from "./context/MilanState";
import ClubForgotpassword from "./pages/clubs/ClubForgotpassword";
import ClubDetailsCard from "./pages/clubs/ClubDetails";
import "./styles/App.css";
import ShopCategory from "./pages/shops/ShopCategory";
import Error404 from "./pages/Error404";
import BacktoTop from "../src/components/Button/BacktoTop/BacktoTop.jsx";

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
            <Route exact path="/clubs/profile" element={<ClubProfile />} />
            <Route
              exact
              path="/clubs/forgotpass"
              element={<ClubForgotpassword />}
            />

            {/* //* Display Routes */}
            <Route exact path="/clubs" element={<ClubsPage />} />
            <Route exact path="/contact" element={<ContactPage />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/clubs/createevent" element={<EventCreate />} />
            <Route exact path="/events" element={<EventsPage />} />
            <Route exact path="/clubs/:id" element={<ClubDetailsCard />} />

            {/* //* Donations */}
            <Route exact path="/donateus" element={<Donate />} />

            {/* //* Shop */}
            <Route exact path="/shop" element={<ShopLanding />} />
            <Route exact path="/shop/:category" element={<ShopCategory />} />
            <Route path={"/*"} element={<Error404 />} />
          </Routes>
        </Router>
        <BacktoTop />
      </MilanState>
    </>
  );
};

export default App;
