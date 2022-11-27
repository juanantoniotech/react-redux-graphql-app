import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import MainRoutes from "./router/main.router";

function App() {
  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
