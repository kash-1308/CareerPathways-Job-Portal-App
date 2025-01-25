import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "./logosss-removebg-preview.png"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <div>
      <div className="navbar">
        <div className="logo"> 
        <img src={logo} alt="Logo" />
        </div>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={handleMenuToggle}>
          ☰
        </button>
        <ul className={`navbar-list ${isMenuOpen ? 'show' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/signup" className="navbar-link">Sign Up</Link>
          </li>
          <li className="navbar-item">
            <Link to="/login" className="navbar-link">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
