import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./App.css";

import Header from "./components/header";
import Footer from "./components/Footer";

function App() {
  const { t, i18n } = useTranslation();
  const [index, setIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  const fruits = [
    {
      name: "Blueberry",
      info: t("blueberryInfo"),
      img: require("./images/pngimg.com - blueberries_PNG36.png"),
      bgColor: "#324a64",
      route: "/blueberry",
    },
    {
      name: "Pineapple",
      info: t("pineappleInfo"),
      img: require("./images/stylish-isolated-pineapple-cut-outs-high-quality-images-free-png.webp"),
      bgColor: "#fcd34d",
      route: "/pineapple",
    },
    {
      name: "Strawberry",
      info: t("strawberryInfo"),
      img: require("./images/pngimg.com - strawberry_PNG2598.png"),
      bgColor: "#ef4444",
      route: "/strawberry",
    },
    {
      name: "Grapes",
      info: t("grapesInfo"),
      img: require("./images/grape1.png"),
      bgColor: "#a3e635",
      route: "/grapes",
    },
    {
      name: "Banana",
      info: t("bananaInfo"),
      img: require("./images/banana-png-32.png"),
      bgColor: "#fde68a",
      route: "/banana",
    },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    const sectionHeight = window.innerHeight;
    const handleScroll = () => {
      const newIndex = Math.min(
        fruits.length - 1,
        Math.floor(window.scrollY / sectionHeight)
      );
      setIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fruits.length]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const currentFruit = fruits[index];

  return (
    <div className={`app-wrapper ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        setLanguage={changeLanguage}
        language={language}
      />

      <motion.div
        className="app-container"
        style={{
          backgroundColor: currentFruit.bgColor,
          minHeight: `${fruits.length * 100}vh`,
        }}
        animate={{ backgroundColor: currentFruit.bgColor }}
        transition={{ duration: 1.2 }}
      >
        <div
          className="sticky-wrapper"
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="centered-content updated-layout">
            <div
              className="left-text"
              style={darkMode ? { color: "#000" } : { color: "#fff" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFruit.name + "-text"}
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 1.2 }}
                >
                  <h1>{t(currentFruit.name)}</h1>
                  <p>{currentFruit.info}</p>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: darkMode ? "#000" : "#fff",
                      color: darkMode ? "#fff" : "#000",
                    }}
                    whileTap={{ scale: 0.95, rotate: -2 }}
                    className="fancy-button"
                    style={
                      darkMode
                        ? {
                            color: "#000",
                            borderColor: "#000",
                          }
                        : {}
                    }
                    onClick={() => navigate(currentFruit.route)}
                  >
                    {t("learnMore")}
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="right-image">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentFruit.name + "-image"}
                  src={currentFruit.img}
                  alt={currentFruit.name}
                  className="fruit-image large-fruit"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 1.2 }}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}

export default App;
