import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./router";
import {HashRouter} from "react-router-dom";

import BottomNavigation from "Components/navigation/BottomNavigation";
import "Assets/stylesheets/app.scss";
import Header from "Components/Header";

const rootElement = ReactDOM.createRoot(document.getElementById("app"));

rootElement.render(
  <React.StrictMode>
    <HashRouter>
      <div className="app-container">
        <Header />
        <main className="page-container">
          <Routes />
        </main>
        <BottomNavigation />
      </div>
    </HashRouter>
  </React.StrictMode>
);
