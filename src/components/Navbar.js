import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current path

  // Effect to update navbar on route change
  useEffect(() => {
    console.log("Route changed to:", location.pathname);
  }, [location.pathname]); // Run effect whenever the path changes

  // Define background styles based on the page
  const getNavbarStyle = () => {
    if (location.pathname === "/add-home") {
      return { background: "linear-gradient(to right, #FF8E9E, rgba(205, 139, 16, 0.73)" }; // Adjust color for AddHome page
    }
    return { background: "linear-gradient(to right, #ff758c, #ff7eb3)" }; // Default Hero page color
  };

  return (
    <nav className="navbar" style={getNavbarStyle()}>
      <div className="nav-brand">
        <img src="/assets/logo.png" alt="HandToHand Logo" className="logo" />
        <span>HandToHand</span>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={`nav-links ${menuOpen ? "show" : ""}`}>
        <a href="/">Home</a>
        <a href="/add-home">Add Home</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
