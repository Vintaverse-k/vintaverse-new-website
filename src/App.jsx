import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

// Import the single page component
import WhatWe from "./Components/pages/what/WhatWe";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<WhatWe />} />
      </Routes>
    </Router>
  );
}
