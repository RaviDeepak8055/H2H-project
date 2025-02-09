import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react"; // Import useEffect to add logging
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AddHome from "./components/AddHome"; // Import the new page

function App() {
  // Log when the app is loaded/rendered
  useEffect(() => {
    console.log("App Loaded");
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/add-home" element={<AddHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
