import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PineappleHeader from "../components/StrawberryHeader";
import Footer from "../components/Footer";
import Recipes from "../components/Recipes";
import FloatingImages from "../components/FloatingImages";
import FruitGrowingGuide from "../components/FruitGrowingGuide";
import FruitNutrition from "../components/FruitNutrition";
import "./GrapesPage.css";

import grapeWine from "../images/grape-wine.jpg";
import grapeSalad from "../images/grape-salad.jpg";
import grapeGrowth from "../images/grape-growth.png";
import grapeBaked from "../images/baked-grapes.jpg";

function GrapesPage() {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const grapesRecipes = [
    {
      title: t("Grape and Cheese Salad_grape"),
      image: grapeSalad,
      instructions: t(
        "1. Wash the grapes and cut them in half.\n2. Mix with feta cheese and walnuts.\n3. Drizzle with olive oil and serve._grape"
      ),
    },
    {
      title: t("Homemade Grape Wine_grape"),
      image: grapeWine,
      instructions: t(
        "1. Harvest ripe grapes and crush them.\n2. Let them ferment for several weeks.\n3. Strain and enjoy the wine._grape"
      ),
    },
    {
      title: t("Baked Grapes with Cheese and Walnuts_grape"),
      image: grapeBaked,
      instructions: t(
        "Roast grapes in the oven with a bit of honey, then add sliced cheese and walnuts on top. Serve warm._grape"
      ),
    },
  ];

  const grapesSegments = [
    {
      emoji: "🌱",
      title: t("Planting Grapes_grape"),
      content: t(
        "Planting grapes is best done in spring. Choose a sunny location and well-drained soil._grape"
      ),
    },
    {
      emoji: "💧",
      title: t("Watering_grape"),
      content: t(
        "Grapes need regular watering, but avoid excessive moisture that can cause rot._grape"
      ),
    },
    {
      emoji: "🌡️",
      title: t("Temperature_grape"),
      content: t("The optimal temperature for grape growth is between 18°C and 30°C._grape"),
    },
    {
      emoji: "⏳",
      title: t("Growth Time_grape"),
      content: t(
        "Grapes ripen over a period of 4 to 6 months, depending on the variety and climate._grape"
      ),
    },
  ];

  const grapesDetails = [
    {
      heading: t("Soil and Planting_grape"),
      text: t("Grapes prefer slightly acidic to neutral soil with good drainage._grape"),
    },
    {
      heading: t("Care_grape"),
      text: t(
        "Regularly prune and remove damaged parts of the plant to encourage growth._grape"
      ),
    },
    {
      heading: t("Protection_grape"),
      text: t("Use natural methods to protect against fungal diseases and pests._grape"),
    },
    {
      heading: t("Harvesting_grape"),
      text: t(
        "Harvesting is usually done by hand when the berries are brightly colored and sweet._grape"
      ),
    },
  ];

  return (
    <div className={`grapes-page-wrapper ${darkMode ? "dark-mode" : "light-mode"}`}>
      <PineappleHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <FloatingImages variant="grape" />

      <main className={darkMode ? "dark-mode" : ""} style={{ paddingTop: "70px" }}>
        <section id="recepti" style={{ padding: "100px 20px" }}>
          <h2 className="recipes-section-titleg">{t("Grape Recipes_grape")}</h2>
          <Recipes recipes={grapesRecipes} variant="grape" />
        </section>

        <section id="uzgajanje" style={{ padding: "100px 20px" }}>
          <FruitGrowingGuide
            title={t("How to Grow Grapes_grape")}
            segments={grapesSegments}
            details={grapesDetails}
            growthImagePath={grapeGrowth}
            growthImageAlt={t("Grape Growth Stages_grape")}
            variant="grape"
          />
        </section>

        <section id="nutritivnost" style={{ padding: "100px 20px" }}>
          <FruitNutrition variant="grape" />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default GrapesPage;
