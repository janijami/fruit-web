import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";

function StrawberryHeader({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  // Funkcija za promjenu jezika
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${darkMode ? "dark" : "light"}`}>
      <div className="left-header">
        {/* Gumb za promjenu jezika PT/EN */}
        <button
          onClick={() => changeLanguage("pt")}
          className="language-toggle"
          aria-label="Change language to Portuguese"
          style={{ marginRight: "10px" }}
        >
          PT
        </button>
        <button
          onClick={() => changeLanguage("en")}
          className="language-toggle"
          aria-label="Change language to English"
          style={{ marginRight: "20px" }}
        >
          EN
        </button>

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
          <a href="/" className="fruit-emoji" title={t("Home")}>🏠︎</a>
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
            <li><a href="#recepti" onClick={() => setIsMenuOpen(false)}>{t("Recipes")}</a></li>
            <li><a href="#uzgajanje" onClick={() => setIsMenuOpen(false)}>{t("Growing")}</a></li>
            <li><a href="#nutritivnost" onClick={() => setIsMenuOpen(false)}>{t("Nutrition")}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default StrawberryHeader;
