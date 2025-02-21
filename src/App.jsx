import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/Components/navbar";
import Home from "./assets/Components/home";
import QuickMeal from "./assets/Components/quickmeal";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quickmeal" element={<QuickMeal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
