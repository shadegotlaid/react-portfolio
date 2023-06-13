import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`hamburger-icon ${isMenuOpen ? 'active' : ''}`}></div>
        <div className={`hamburger-icon ${isMenuOpen ? 'active' : ''}`}></div>
        <div className={`hamburger-icon ${isMenuOpen ? 'active' : ''}`}></div>
      </div>
      <ul className={`navbar-list ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link className="navbar-item" to="/">Main</Link>
        </li>
        <li>
          <Link className="navbar-item" to="/MyProjects">My Projects</Link>
        </li>
        <li>
          <Link className="navbar-item" to="/Contact">Contact</Link>            
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
