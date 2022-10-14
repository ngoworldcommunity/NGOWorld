import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";

let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
