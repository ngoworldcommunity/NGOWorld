import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import BacktoTop from "../src/components/Button/BacktoTop/BacktoTop.jsx";
import routesConfig from "./assets/data/routesConfig";
export const modeContext = React.createContext();
const App = () => {
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? "body" : ""}>
      <modeContext.Provider value={{ dark, setDark }}>
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
      </modeContext.Provider>
      <BacktoTop />
    </div>
  );
};

export default App;
