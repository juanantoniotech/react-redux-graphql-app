import React from "react";
// import { Switch, Route } from 'react-router-dom'
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home/HomePage";
import FavPage from "./components/favs/FavPage";
import LoginPage from "./components/login/LoginPage";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favs" element={<FavPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
