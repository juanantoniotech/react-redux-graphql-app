import React from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "../components/home/home.page";
import HomePage from "../pages/home";
import FavPage from "../components/favs/fav.page";
// import LoginPage from "../components/login/login.page";
import LoginPage from "../pages/login/login.page";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favs" element={<FavPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
