import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import "./App.css";
import "animate.css/animate.min.css";


import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
