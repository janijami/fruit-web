import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PineappleHeader from "../components/StrawberryHeader";
import Footer from "../components/Footer";
import Recipes from "../components/Recipes";
import FloatingImages from "../components/FloatingImages";
import FruitGrowingGuide from "../components/FruitGrowingGuide";
import FruitNutrition from "../components/FruitNutrition";
import "./PineapplePage.css";

import pineappleSmoothie from "../images/pineapple-smoothie.jpg";
import pineappleCake from "../images/pineapple-cake.jpg";
import pineappleSalad from "../images/pineapple-salad.jpg";
import growthImage from "../images/pineapple-growth.png";

function PineapplePage() {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const pineappleRecipes = [
    {
      title: t("Pineapple Smoothie_pineapple"),
      image: pineappleSmoothie,
      instructions: t(
        "1. Blend pineapple, banana, and coconut milk.\n2. Mix until smooth.\n3. Serve chilled._pineapple"
      ),
    },
    {
      title: t("Pineapple Cake_pineapple"),
      image: pineappleCake,
      instructions: t(
        "1. Prepare sponge cake batter.\n2. Add pineapple pieces.\n3. Bake for 40 minutes at 180°C._pineapple"
      ),
    },
    {
      title: t("Tropical Salad_pineapple"),
      image: pineappleSalad,
      instructions: t(
        "1. Chop pineapple, mango, and orange.\n2. Mix with lemon juice.\n3. Chill before serving._pineapple"
      ),
    },
  ];

  const pineappleSegments = [
    {
      emoji: "🌱",
      title: t("How to Plant_pineapple"),
      content: t(
        "Pineapple is grown from the fruit's top. Cut off the green crown and plant it in moist soil. It needs lots of sun and warmth._pineapple"
      ),
    },
    {
      emoji: "💧",
      title: t("How to Water_pineapple"),
      content: t(
        "Water moderately. The soil should be moist but not soggy. Water more frequently during hot months._pineapple"
      ),
    },
    {
      emoji: "🌡️",
      title: t("Optimal Temperatures_pineapple"),
      content: t(
        "Pineapple thrives at temperatures between 20°C and 30°C. It does not tolerate frost._pineapple"
      ),
    },
    {
      emoji: "⏳",
      title: t("Growth Cycle_pineapple"),
      content: t(
        "Growth takes 18–24 months. After that, a flower forms, followed by a fruit that matures in 5–6 months._pineapple"
      ),
    },
  ];

  const pineappleDetails = [
    {
      heading: t("Watering_pineapple"),
      text: t(
        "Keep the soil slightly moist. Avoid standing water. Water into the center of the rosette._pineapple"
      ),
    },
    {
      heading: t("Growth and Development_pineapple"),
      text: t(
        "Growth is slow – the first fruit comes after 2 years. It’s worth the wait as the plant is very resilient._pineapple"
      ),
    },
    {
      heading: t("Planting_pineapple"),
      text: t(
        "Plant in sandy, well-draining soil. Place the pineapple top 2–3 cm deep._pineapple"
      ),
    },
    {
      heading: t("Optimal Conditions_pineapple"),
      text: t(
        "A sunny location with at least 6 hours of direct sunlight daily. Ideal for container growing indoors._pineapple"
      ),
    },
  ];

  return (
    <div className={`pineapple-page-wrapper ${darkMode ? "dark-mode" : "light-mode"}`}>
      <PineappleHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <FloatingImages variant="pineapple" />

      <main style={{ paddingTop: "70px" }}>
        <section id="recepti" style={{ padding: "100px 20px" }}>
          <h2 className="recipes-section-titlep">{t("Pineapple Recipes_pineapple")}</h2>
          <Recipes recipes={pineappleRecipes} variant="pineapple" />
        </section>

        <section id="uzgajanje" style={{ padding: "100px 20px" }}>
          <FruitGrowingGuide
            title={t("How to Grow Pineapple_pineapple")}
            segments={pineappleSegments}
            details={pineappleDetails}
            growthImagePath={growthImage}
            growthImageAlt={t("Pineapple Growth Stages_pineapple")}
            variant="pineapple"
          />
        </section>

        <section id="nutritivnost" style={{ padding: "100px 20px" }}>
          <FruitNutrition variant="pineapple" />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default PineapplePage;
