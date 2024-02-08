import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PatinetContextProvider } from "./context/PatientContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PatinetContextProvider>
    <BrowserRouter>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </BrowserRouter>
  </PatinetContextProvider>
);
