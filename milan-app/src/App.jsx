import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import ClubRegister from './pages/clubs/ClubsLogin';


const App = () => {
    return (
        <>


            <Router>
                <Routes>
                    {/* //* Home routes */}

                    <Route exact path='/' element={<Home />} />

                    {/* //* Auth routes - USER*/}

                    {/* <Route exact path='/user/register' element={<UserLogin />} />
                    <Route exact path='/user/login' element={<UserRegister />} /> */}

                    {/* //* Auth routes - CLUBS*/}

                    {<Route exact path='/user/login' element={<ClubRegister />} />
                    
                    /* <Route exact path='/user/register' element={<ClubLogin />} /> */}

                    {/* //* Display Routes */}
                    {/* <Route exact path='/display/clubs' element={<ClubsPage />} /> */}


                    {/* //* Donations */}
                    {/* <Route exact path='/' element={<Home />} />
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/' element={<Home />} /> */}
                </Routes>
            </Router>


        </>
    )
}

export default App