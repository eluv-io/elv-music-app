import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";

import Home from "Components/Home";
import Library from "Components/Library";
import Discover from "Components/Discover";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact={true} path="/" element={<Home />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/library" element={<Library />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
