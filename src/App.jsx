import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import BacktoTop from "../src/components/Button/BacktoTop/BacktoTop.jsx";
import routesConfig from "./assets/data/routesConfig";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {routesConfig.map((route, index) => (
            <Route
              key={index}
              exact
              path={route?.path}
              element={route?.element}
            />
          ))}
        </Routes>
      </Router>
      <BacktoTop />
    </>
  );
};

export default App;
