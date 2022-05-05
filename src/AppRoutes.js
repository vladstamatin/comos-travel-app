import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Spaceships from "./pages/Spaceships";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/spaceships" element={<Spaceships />} />
    </Routes>
  );
};

export default AppRoutes;
