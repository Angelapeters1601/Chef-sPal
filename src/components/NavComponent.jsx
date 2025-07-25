import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import "./NavComponent.css";

function NavComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuOpen &&
        !e.target.closest(".mobile-menu") &&
        !e.target.closest(".menu-btn")
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  const getActiveClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  const getMobileActiveClass = ({ isActive }) =>
    isActive ? "mobile-link active" : "mobile-link";

  return (
    <nav className="navbar">
      {/* Logo */}
      <NavLink to="/" className="logo-group">
        <h1 className="logo">Chef's Pal</h1>
        <p className="subtitle">Culinary Inspiration at Your Fingertips</p>
      </NavLink>

      {/* Desktop Links */}
      <div className="nav-links">
        <NavLink to="/" className={getActiveClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={getActiveClass}>
          About
        </NavLink>
        <NavLink to="/services" className={getActiveClass}>
          Services
        </NavLink>
        <NavLink to="/recipes" className={getActiveClass}>
          Recipes
        </NavLink>
        <NavLink to="/contact" className={getActiveClass}>
          Contact
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <button
        className={`menu-btn ${menuOpen ? "open" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          setMenuOpen(!menuOpen);
        }}
        aria-label="Menu"
      >
        {menuOpen ? (
          <GiKnifeFork
            className="close-icon"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <div className="hamburger" onClick={() => setMenuOpen(true)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <NavLink
          to="/"
          className={getMobileActiveClass}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={getMobileActiveClass}
          onClick={() => setMenuOpen(false)}
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className={getMobileActiveClass}
          onClick={() => setMenuOpen(false)}
        >
          Services
        </NavLink>
        <NavLink
          to="/recipes"
          className={getMobileActiveClass}
          onClick={() => setMenuOpen(false)}
        >
          Recipes
        </NavLink>
        <NavLink
          to="/contact"
          className={getMobileActiveClass}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default NavComponent;
