import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
);

async function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js");

      if (registration.installing) {
        console.log(
          "%c🎉 Service Worker installed",
          "background-color: green; color: white; padding: 4px;",
        );
      } else if (registration.active) {
        console.log(
          "%c👷🏻‍♂️ Service Worker registered",
          "background-color: green; color: white; padding: 4px; border-radius: 5px;",
        );
      }
    } catch (e) {
      console.log(
        "%c👎🏻 Service Worker registration failed",
        "background-color: red; color: white; padding: 4px; border-radius: 5px;",
      );
    }
  }
}

registerServiceWorker();
