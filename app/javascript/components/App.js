import React from "react";
import { Routes, Route } from "react-router-dom";
import Greet from "./Greet";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Greet />} />
    </Routes>
  );
}

export default App;
