import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";

import Home from "Components/Home";
import Marketplaces from "Components/Marketplaces";
import Content from "Components/Content";
import Data from "Components/Data";
import Playlists from "Components/Playlists";
import Analytics from "Components/Analytics";
import Monetization from "Components/Monetization";

export const appRoutes = [
  {path: "/", name: "Home"},
  {path: "/content", name: "Content"},
  {path: "/marketplaces", name: "Marketplaces"},
  {path: "/playlists", name: "Playlists"},
  {path: "/analytics", name: "Analytics"},
  {path: "/data", name: "Data"},
  {path: "/monetization", name: "Monetization"}
];

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact={true} path="/" element={<Home />} />
      <Route path="/content" element={<Content />} />
      <Route path="/marketplaces" element={<Marketplaces />} />
      <Route path="/playlists" element={<Playlists />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/data" element={<Data />} />
      <Route path="/monetization" element={<Monetization />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
