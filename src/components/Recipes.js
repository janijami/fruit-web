import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./Recipes.css";

function Recipes({ recipes, variant = "blueberry" }) {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`${variant}-variant`}>
      {recipes.map((recipe, index) => (
        <div key={index} className={`${variant}-card recipe-card`}>
          <img src={recipe.image} alt={recipe.title} />
          <h3>{recipe.title}</h3>
          <button
            className={`${variant}-button recipe-button`}
            onClick={() => toggleOpen(index)}
          >
            {openIndex === index ? t("Hide recipe") : t("Show recipe")}
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                key="recipe-details"
                className={`${variant}-details recipe-details ${openIndex === index ? "open" : ""}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <p>{recipe.instructions}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default Recipes;
