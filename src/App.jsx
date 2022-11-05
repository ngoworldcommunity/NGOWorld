import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
} from './pages';
import MilanState from './context/MilanState';
import ClubForgotpassword from './pages/clubs/ClubForgotpassword';
import ClubDetailsCard from './pages/clubs/ClubDetails';
import UserForgotpassword from './pages/user/UserForgotpassword';
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <>
      <MilanState>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          closeButton={false}
        />
        <Router>
          <Routes>
            {/* //* Home routes */}

            <Route exact path="/" element={<Home />} />

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

            {/* //* Display Routes */}
            <Route exact path="/display/clubs" element={<ClubsPage />} />
            <Route exact path="/contact" element={<ContactPage />} />
            <Route exact path="/about-us" element={<AboutUs />} />
            <Route exact path="/clubs/createevent" element={<EventCreate />} />
            <Route exact path="/display/events" element={<EventsPage />} />
            <Route exact path="/shops/shop" element={<ShopLanding />} />
            <Route exact path="/display/clubs/details" element={<ClubDetailsCard />} />
           

            {/* //* Donations */}
            <Route exact path="/donateus" element={<Donate />} />
          </Routes>
        </Router>
      </MilanState>
    </>
  );
};

export default App;
