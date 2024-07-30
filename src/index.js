import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ObjectProvider } from "./components/ObjectContext";
import { CookiesProvider } from "react-cookie";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <ObjectProvider>
        <App />
      </ObjectProvider>
    </CookiesProvider>
  </React.StrictMode>
);
reportWebVitals();