import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import Routes from "./Routing";

function App() {
  return (
    <div>
      <div className="nav-bar">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "link")}
          to="/"
        >
          Inicio
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "link")}
          to="/favs"
        >
          Favoritos
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "link")}
          to="/login"
        >
          Login
        </NavLink>
      </div>
      <Routes />
    </div>
  );
}

export default App;
