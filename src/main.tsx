import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "../public/index.css";
import { Provider } from "react-redux";
import store from "./store/store";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ExampleSite from "./ExampleSite";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/SiteBuilding" element={<ExampleSite />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
