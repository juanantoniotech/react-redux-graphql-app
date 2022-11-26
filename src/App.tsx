import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PublicRoutes from "./navigation/PublicRoutes";

function App() {
  return (
    <div>
      <Navbar />
      <PublicRoutes />
    </div>
  );
}

export default App;
