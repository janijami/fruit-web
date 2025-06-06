// src/components/PineappleHeader.js
import React, { useState } from "react";
import "./Header.css";

function PineappleHeader({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <header className={`header ${darkMode ? "dark" : "light"}`}>
      <div className="left-header">
        <button
          aria-label="Toggle Dark Mode"
          onClick={toggleDarkMode}
          className="dark-mode-toggle"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      <div className="right-header">
        <div className="fruit-emojis">
          <a href="/" className="fruit-emoji" title="Home">🏠︎</a>
        </div>

        <button
          aria-label="Toggle Menu"
          onClick={toggleMenu}
          className={`hamburger ${isMenuOpen ? "open" : ""} ${darkMode ? "dark" : "light"}`}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-menu ${isMenuOpen ? "show" : ""} ${darkMode ? "dark" : "light"}`}>
          <ul>
            <li><a href="#recepti" onClick={() => setIsMenuOpen(false)}>Recipes</a></li>
            <li><a href="#uzgajanje" onClick={() => setIsMenuOpen(false)}>Growing</a></li>
            <li><a href="#nutritivnost" onClick={() => setIsMenuOpen(false)}>Nutrition</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default PineappleHeader;
