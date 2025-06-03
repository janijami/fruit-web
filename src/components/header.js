import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Header.css";

const fruits = [
  { name: "Blueberry", route: "/blueberry" },
  { name: "Pineapple", route: "/pineapple" },
  { name: "Strawberry", route: "/strawberry" },
  { name: "Grapes", route: "/grapes" },
  { name: "Banana", route: "/banana" },
];

function Header({ darkMode, toggleDarkMode, isMenuOpen, toggleMenu, language, setLanguage }) {
  const { t } = useTranslation();

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
        <div className="language-buttons">
          <button
            onClick={() => setLanguage("en")}
            className={`lang-button ${language === "en" ? "active" : ""}`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("pt")}
            className={`lang-button ${language === "pt" ? "active" : ""}`}
          >
            PT
          </button>
        </div>

        <button
          aria-label="Toggle Menu"
          onClick={toggleMenu}
          className={`hamburger ${isMenuOpen ? "open" : ""} ${
            darkMode ? "dark" : "light"
          }`}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-menu ${isMenuOpen ? "show" : ""}`}>
          <ul>
            {fruits.map((fruit) => (
              <li key={fruit.name}>
                <Link to={fruit.route}>{t(fruit.name)}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
