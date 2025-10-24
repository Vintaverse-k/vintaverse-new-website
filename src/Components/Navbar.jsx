import React from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css"; 

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left - Logo */}
      <div className="navbar-logo">
        <img src="/assets/vintalogo.svg" alt="Logo" />
      </div>

      {/* Center - Links */}
      <ul className="navbar-links">
        <li><Link to="/">What We Do</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
      </ul>

      {/* Right - Contact Button */}
      <Link to="/contact" className="contact-btn">
        CONTACT US
      </Link>
    </nav>
  );
}

export default Navbar;
