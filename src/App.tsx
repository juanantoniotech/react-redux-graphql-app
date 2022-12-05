import React from "react";
import "./App.css";
import Navbar from "@components/navbar";
import RoutesManager from "@setup/routes-manager";

function App() {
  return (
    <div>
      <Navbar />
      <RoutesManager />
    </div>
  );
}

export default App;
