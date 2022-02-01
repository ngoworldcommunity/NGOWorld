import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'






const App = () => {
    return (
        <>


            <Router>
                <Routes>
                    {/* //* Home routes */}

                    <Route exact path='/' element={<Home />} />

                    {/* //* Auth routes */}
                    {/* <Route exact path='/' element={<Home />} />
                    <Route exact path='/' element={<Home />} /> */}


                </Routes>
            </Router>


        </>
    )
}

export default App