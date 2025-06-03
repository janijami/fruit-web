import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import BlueberryHeader from "../components/StrawberryHeader";
import Footer from "../components/Footer";
import Recipes from "../components/Recipes";
import FloatingImages from "../components/FloatingImages";
import FruitGrowingGuide from "../components/FruitGrowingGuide";
import FruitNutrition from "../components/FruitNutrition";
import "./BlueberryPage.css";

import blueberryPie from "../images/blueberry-pie.jpg";
import blueberrySmoothie from "../images/blueberry-smoothie.jpg";
import blueberryMuffins from "../images/blueberry-muffins.jpg";
import growthStagesImage from "../images/infographic-tree-planting-seedling-plant-260nw-714997903.png";

function BlueberryPage() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const { t } = useTranslation();

  // Prijevod naslova recepata i segmenata
  const blueberryRecipes = [
    {
      title: t("Blueberry Pie"),
      image: blueberryPie,
      instructions: t(
        "1. Prepare the pie dough.\n2. Add blueberries and sugar.\n3. Bake for 45 minutes at 180°C."
      ),
    },
    {
      title: t("Blueberry Smoothie"),
      image: blueberrySmoothie,
      instructions: t(
        "1. Put blueberries, banana, and yogurt in a blender.\n2. Blend until smooth.\n3. Serve chilled."
      ),
    },
    {
      title: t("Blueberry Muffins"),
      image: blueberryMuffins,
      instructions: t(
        "1. Mix the muffin ingredients.\n2. Add fresh blueberries.\n3. Bake for 25 minutes at 180°C."
      ),
    },
  ];

  const blueberrySegments = [
    {
      emoji: "🌱",
      title: t("How to plantblueberry"),
      content: t(
        "Choose a sunny spot with acidic, well-draining soil. Plant seedlings in fall or early spring, about 1 meter apart."
      ),
    },
    {
      emoji: "💧",
      title: t("How to waterblueberry"),
      content: t(
        "Blueberries like moist but not soggy soil. Water regularly, especially during dry periods, about 2–3 times per week."
      ),
    },
    {
      emoji: "🌡️",
      title: t("Optimal temperaturesblueberry"),
      content: t(
        "Blueberries grow best between 15°C and 25°C but tolerate cold winters, which are needed for dormancy."
      ),
    },
    {
      emoji: "⏳",
      title: t("Growth cycleblueberry"),
      content: t(
        "The cycle begins in spring with budding, followed by blooming, fruit development in summer, and harvest in late summer or fall."
      ),
    },
  ];

  const blueberryDetails = [
    {
      heading: t("Watering"),
      text: t(
        "For optimal growth, the soil must remain consistently moist but well-drained. Too much water can cause root rot. Use mulch to retain moisture."
      ),
    },
    {
      heading: t("Growth and development"),
      text: t(
        "Blueberries grow slowly in the first year. They begin to yield full crops after 3 years. Regular pruning and removing old fruit is important."
      ),
    },
    {
      heading: t("Planting"),
      text: t(
        "Plant seedlings in shallow holes about 30 cm deep, enriched with peat or acidic compost. Leave enough space to avoid crowding."
      ),
    },
    {
      heading: t("Optimal conditions"),
      text: t(
        "Acidic soil (pH 4.5 - 5.5), wind protection, and plenty of sunlight. Cold winters are essential for proper dormancy cycles."
      ),
    },
  ];

  return (
    <div className={`blueberry-page-wrapper ${darkMode ? "dark-mode" : "light-mode"}`}>
      <BlueberryHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <FloatingImages />

      <main style={{ paddingTop: "70px" }}>
        <section id="recepti" style={{ padding: "100px 20px" }}>
          <h2 className="recipes-section-titlebl">{t("Blueberry Recipes")}</h2>
          <Recipes recipes={blueberryRecipes} variant="blueberry" />
        </section>

        <section id="uzgajanje" style={{ padding: "100px 20px" }}>
          <FruitGrowingGuide
            title={t("How to grow blueberries")}
            segments={blueberrySegments}
            details={blueberryDetails}
            growthImagePath={growthStagesImage}
            growthImageAlt={t("Blueberry growth stages")}
          />
        </section>

        <section id="nutritivnost" style={{ padding: "100px 20px" }}>
          <FruitNutrition variant="blueberry" />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default BlueberryPage;
