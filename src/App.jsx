//General Imports 
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//Page Imports
import WelcomePage from "./pages/welcomepage";
import HomePage from "./pages/homepage";


function App() {
  return (
      <Router>
    <div>
      <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
      </Router>
  );
}

export default App;
