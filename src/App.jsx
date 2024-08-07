//General Imports 
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//Page Imports
import WelcomePage from "./pages/welcomepage/welcomepage";
import HomePage from "./pages/homepage/homepage";
import TherapyOptionsPage from "./pages///therapyoptionspage/therapyoptionspage"
import MyProgressPage from "./pages/myprogresspage/myprogresspage";
import TherapyToolsPage from "./pages/therapytoolspage/therapytoolspage";
import ResourcesPage from "./pages/resourcespage/resourcespage";
import FindTherapistPage from "./pages/findTherapistPage/findTherapistPage";
import CommunityForum from "./pages/CommunityForumPage/CommunityForumPage";


import NavBar from "./components/NavBar/navbar";


function App() {
  return (
      <Router>
    <div>
      <NavBar />
      <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/therapyoptions" element={<TherapyOptionsPage />} />
          <Route path="/myprogress" element={<MyProgressPage />} />
          <Route path="/therapytools" element={<TherapyToolsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/findtherapist" element={<FindTherapistPage />} />
          <Route path="/communityforum" element={<CommunityForum />} />






      </Routes>
    </div>
      </Router>
  );
}

export default App;
