import React from "react";
import { NavLink } from "react-router-dom";

export type Props = {};

const Navbar: React.FC<Props> = (props) => {
  return (
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
  );
};

export default Navbar;
