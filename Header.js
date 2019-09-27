import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Header() {

  const navStyle = {
    color: 'white'
  };

  return (
    <nav className="header ">
      <Link style={navStyle} to="/" >
        <h3>MySecretDiary</h3>
      </Link>

      <ul className="nav-links">
        <Link style={navStyle} to="/Allround/1" >
          <li>Schwarzmaler Sarkasmus</li>
        </Link>
        <Link style={navStyle} to="/Allround/2" >
          <li>Get a Mate</li>
        </Link>

        <Link style={navStyle} to="/Allround/3" >
          <li>Dr. Chaos</li>
        </Link>

      </ul>
    </nav>
  );
}

export default Header;