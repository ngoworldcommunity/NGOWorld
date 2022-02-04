import React, {Component} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import axios from 'axios';
import Home from './pages/Home'
import ClubRegister from './pages/clubs/ClubsRegister'
import "./pages/clubs/ClubsRegister"


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

                    {/* <Route exact path='/user/login' element={<ClubLogin />} /> */}
                    
                    <Route exact path='/user/register' element={<ClubRegister />} />

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