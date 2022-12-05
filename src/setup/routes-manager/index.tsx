import React from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "../components/home/home.page";
import CharsPage from "../../pages/chars";
import FavPage from "../../components/favs/fav.page";
// import LoginPage from "../components/login/login.page";
import LoginPage from "../../pages/login/login.page";

export default function RoutesManager() {
  return (
    <Routes>
      <Route path="/" element={<CharsPage />} />
      <Route path="/characters" element={<CharsPage />} />
      <Route path="/favs" element={<FavPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
