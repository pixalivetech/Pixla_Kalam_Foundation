import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Components/Home/Hero"
import Home from "./Pages/Home";
import TermsAndConditions from "./Components/Home/Terms&Condition"; 
import PrivacyPolicy from "./Components/Home/Privacypolicy"
import Footer from "./Components/Home/Footer"

const App = () => {
  return (
    <Router>
      <Hero/>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        {/* Terms Page (optional, if you created it) */}
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
