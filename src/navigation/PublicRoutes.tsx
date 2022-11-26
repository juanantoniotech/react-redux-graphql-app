import React from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "../components/Home/HomePage";
import HomePage from "../pages/Home/";
import FavPage from "../components/Favs/FavPage";
import LoginPage from "../components/Login/LoginPage";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favs" element={<FavPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
