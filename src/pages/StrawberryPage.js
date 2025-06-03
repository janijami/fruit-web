import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import StrawberryHeader from "../components/StrawberryHeader";
import Footer from "../components/Footer";
import Recipes from "../components/Recipes";
import FloatingImages from "../components/FloatingImages";
import FruitGrowingGuide from "../components/FruitGrowingGuide";
import FruitNutrition from "../components/FruitNutrition";
import "./StrawberryPage.css";

import strawberryCake from "../images/strawberry-cake.jpg";
import strawberrySmoothie from "../images/strawberry-smoothie.jpg";
import strawberrySalad from "../images/strawberry-salad.jpg";
import growthImage from "../images/strawberry-growth.png";

function StrawberryPage() {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // Pripremi recepti s prevedenim naslovima i uputama
  const strawberryRecipes = [
    {
      title: t("Strawberry Smoothie"),
      image: strawberrySmoothie,
      instructions: t("Instructions") + ":\n1. " + t("Blend strawberries, banana, and yogurt.") + "\n2. " + t("Add a bit of honey if desired.") + "\n3. " + t("Serve chilled."),
    },
    {
      title: t("Strawberry Cake"),
      image: strawberryCake,
      instructions: t("Instructions") + ":\n1. " + t("Bake the sponge cake.") + "\n2. " + t("Add cream and strawberries on top.") + "\n3. " + t("Chill and serve."),
    },
    {
      title: t("Summer Salad"),
      image: strawberrySalad,
      instructions: t("Instructions") + ":\n1. " + t("Mix arugula, strawberries, and feta.") + "\n2. " + t("Add balsamic vinegar.") + "\n3. " + t("Enjoy the freshness!"),
    },
  ];

  // Pripremi segmente za uzgajanje s prijevodima
  const strawberrySegments = [
    {
      emoji: "🌱",
      title: t("Planting Strawberries"),
      content: t("Strawberries are planted in spring or fall. They need a sunny spot and loose, humus-rich soil."),
    },
    {
      emoji: "💧",
      title: t("Watering"),
      content: t("Water regularly, especially during flowering and fruit formation. Avoid wetting the leaves."),
    },
    {
      emoji: "🌡️",
      title: t("Temperature"),
      content: t("Strawberries prefer a mild climate, ideally between 15°C and 25°C."),
    },
    {
      emoji: "⏳",
      title: t("Growth Time"),
      content: t("It takes about 2–3 months from planting to harvest. Fruits ripen gradually."),
    },
  ];

  // Detalji za uzgajanje prevedeni
  const strawberryDetails = [
    {
      heading: t("Soil and Planting"),
      text: t("Strawberries are planted in rows with 30–40 cm spacing. Soil should be well-drained and rich in nutrients."),
    },
    {
      heading: t("Care"),
      text: t("Regularly remove weeds and dry leaves. Add mulch if needed to retain moisture."),
    },
    {
      heading: t("Protection"),
      text: t("Use nets to protect from birds and treat insects with natural remedies."),
    },
    {
      heading: t("Harvesting"),
      text: t("Strawberries are ready to harvest when fully red and fragrant. Pick carefully to avoid damaging the plant."),
    },
  ];

  return (
    <div className={`strawberry-page-wrapper ${darkMode ? "dark-mode" : "light-mode"}`}>
      <StrawberryHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <FloatingImages variant="strawberry" />

      <main style={{ paddingTop: "70px" }}>
        <section id="recepti" style={{ padding: "100px 20px" }}>
          <h2 className="recipes-section-titles">{t("Strawberry Recipes")}</h2>
          <Recipes recipes={strawberryRecipes} variant="strawberry" />
        </section>

        <section id="uzgajanje" style={{ padding: "100px 20px" }}>
          <FruitGrowingGuide
            title={t("How to Grow Strawberries")}
            segments={strawberrySegments}
            details={strawberryDetails}
            growthImagePath={growthImage}
            growthImageAlt={t("Strawberry Growth Stages")}
            variant="strawberry"
          />
        </section>

        <section id="nutritivnost" style={{ padding: "100px 20px" }}>
          <FruitNutrition variant="strawberry" />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default StrawberryPage;
