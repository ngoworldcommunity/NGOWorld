import React, { Suspense } from "react";
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
  Error404,
  ShopCategory,
  UserForgotpassword,
  ClubDetailsCard,
  ClubForgotpassword,
} from "./pages";
import MilanState from "./context/MilanState";
import "./styles/App.css";
import Navbar from "./components/Navbar.jsx";
import DisplayLoading from "./components/Loading/DisplayLoading";
import AuthLoading from "./components/Loading/AuthLoading";

const App = () => {
  return (
    <>
      <MilanState>
        <Router>
          <Navbar />
          <Suspense fallback={<AuthLoading />}>
            <Routes>
              {/* //* Auth routes - USER*/}

              <Route exact path="/user/register" element={<UserRegister />} />
              <Route exact path="/user/login" element={<UserLogin />} />
              <Route exact path="/user/profile" element={<UserProfile />} />

              <Route
                exact
                path="/user/forgotpass"
                element={<UserForgotpassword />}
              />

              {/* //* Auth routes - CLUBS*/}

              <Route exact path="/clubs/login" element={<ClubLogin />} />
              <Route exact path="/clubs/register" element={<ClubRegister />} />
              <Route exact path="/clubs/profile" element={<ClubProfile />} />
              <Route
                exact
                path="/clubs/forgotpass"
                element={<ClubForgotpassword />}
              />
            </Routes>
          </Suspense>

          <Suspense fallback={<DisplayLoading />}>
            <Routes>
              {/* //* Home routes */}

              <Route exact path="/" element={<Home />} />

              {/* //* Display Routes */}
              <Route exact path="/clubs" element={<ClubsPage />} />
              <Route exact path="/contact" element={<ContactPage />} />
              <Route exact path="/aboutus" element={<AboutUs />} />
              <Route
                exact
                path="/clubs/createevent"
                element={<EventCreate />}
              />
              <Route exact path="/events" element={<EventsPage />} />
              <Route exact path="/clubs/:id" element={<ClubDetailsCard />} />

              {/* //* Donations */}
              <Route exact path="/donateus" element={<Donate />} />

              {/* //* Shop */}
              <Route exact path="/shop" element={<ShopLanding />} />
              <Route exact path="/shop/:category" element={<ShopCategory />} />
              <Route path={"/*"} element={<Error404 />} />
            </Routes>
          </Suspense>
        </Router>
      </MilanState>
    </>
  );
};

export default App;
