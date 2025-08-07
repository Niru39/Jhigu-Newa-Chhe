import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src="/images/logo.png" alt="logo" className="logo" />
        <button className="navbar-toggle" onClick={toggleMenu}>☰</button>
       <div className={`nav-links ${isOpen ? 'open' : ''}`}>

          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/menu" className="nav-link" onClick={() => setIsOpen(false)}>Menu</Link>
          <Link to="/gallery" className="nav-link" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link to="/booknow" className="nav-link" onClick={() => setIsOpen(false)}>Book Now</Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
