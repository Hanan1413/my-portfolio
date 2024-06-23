import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const closeMobileMenu = () => setNav(false);

  return (
    <div className="navbar">
      {nav && (
        <div className="logo">
          <Link to="/">
            <span className="logo-initial">H</span>
            <span className="logo-name">anan</span>
          </Link>
        </div>
      )}
      <div>
        <div className="logo">
          <Link to="/">
            <span className="logo-initial">H</span>
            <span className="logo-name">anan</span>
          </Link>
        </div>
      </div>

      {/* Menu */}
      <ul className=" menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/skills"> Skills</Link>
        </li>
        <li>
          <Link to="/contact"> Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="humburger">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? "mobile-hidden" : "mobile-menu "}>
        <li className="mobile-items" onClick={closeMobileMenu}>
          <Link to="/">Home</Link>
        </li>
        <li className="mobile-items" onClick={closeMobileMenu}>
          <Link to="/about">About</Link>
        </li>
        <li className="mobile-items" onClick={closeMobileMenu}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className="mobile-items" onClick={closeMobileMenu}>
          <Link to="/skills">Skills</Link>
        </li>
        <li className="mobile-items" onClick={closeMobileMenu}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Social Icons  */}
    </div>
  );
}

export default Navbar;
