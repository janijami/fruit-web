import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PineappleHeader from "../components/StrawberryHeader";
import Footer from "../components/Footer";
import Recipes from "../components/Recipes";
import FloatingImages from "../components/FloatingImages";
import FruitGrowingGuide from "../components/FruitGrowingGuide";
import FruitNutrition from "../components/FruitNutrition";
import "./BananaPage.css";

import bananaBread from "../images/banana-bread.jpg";
import bananaSmoothie from "../images/banana-smoothie.webp";
import bananaPancakes from "../images/banana-pancakes.jpg";
import bananaGrowth from "../images/banana-growth.png";

const bananaRecipes = (t) => [
  {
    title: t("Banana Bread_banana"),
    image: bananaBread,
    instructions: t(
      "1. Mash ripe bananas.\n2. Mix with flour, sugar, eggs, and baking powder.\n3. Bake in the oven at 180°C for about 45 minutes._banana"
    ),
  },
  {
    title: t("Banana Smoothie_banana"),
    image: bananaSmoothie,
    instructions: t(
      "1. Blend banana, milk, and honey.\n2. Add ice cubes and enjoy._banana"
    ),
  },
  {
    title: t("Banana Pancakes_banana"),
    image: bananaPancakes,
    instructions: t(
      "1. Mash the banana and add an egg and oats.\n2. Fry small pancakes in a pan.\n3. Serve with honey or fruit._banana"
    ),
  },
];

const bananaSegments = (t) => [
  {
    emoji: "🌱",
    title: t("Planting Bananas_banana"),
    content: t(
      "Bananas are planted in warm climates, preferably in sunny and sheltered spots._banana"
    ),
  },
  {
    emoji: "💧",
    title: t("Watering_banana"),
    content: t(
      "Water regularly but ensure good drainage to prevent root rot._banana"
    ),
  },
  {
    emoji: "🌡️",
    title: t("Temperature_banana"),
    content: t("Bananas grow best at temperatures between 26°C and 30°C._banana"),
  },
  {
    emoji: "⏳",
    title: t("Growing Time_banana"),
    content: t("It takes about 9 to 12 months from planting to harvest._banana"),
  },
];

const bananaDetails = (t) => [
  {
    heading: t("Soil and Planting_banana"),
    text: t(
      "Bananas thrive in rich, loose soil with plenty of organic matter. Avoid windy areas._banana"
    ),
  },
  {
    heading: t("Care_banana"),
    text: t("Add fertilizer every few weeks and regularly remove dry leaves._banana"),
  },
  {
    heading: t("Protection_banana"),
    text: t(
      "Protect the plant from cold and ensure it is safe from pests like thrips._banana"
    ),
  },
  {
    heading: t("Harvesting_banana"),
    text: t("Harvest when the bananas start to turn yellow. Cut the whole bunch._banana"),
  },
];

function BananaPage() {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={`banana-page-wrapper ${darkMode ? "dark-mode" : "light-mode"}`}>
      <PineappleHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <FloatingImages variant="banana" />

      <main style={{ paddingTop: "70px" }}>
        <section id="recepti" style={{ padding: "100px 20px" }}>
          <h2 className="recipes-section-titleb">{t("Banana Recipes_banana")}</h2>
          <Recipes recipes={bananaRecipes(t)} variant="banana" />
        </section>

        <section id="uzgajanje" style={{ padding: "100px 20px" }}>
          <FruitGrowingGuide
            title={t("How to Grow Bananas_banana")}
            segments={bananaSegments(t)}
            details={bananaDetails(t)}
            growthImagePath={bananaGrowth}
            growthImageAlt={t("Banana growth stages_banana")}
            variant="banana"
          />
        </section>

        <section id="nutritivnost" style={{ padding: "100px 20px" }}>
          <FruitNutrition variant="banana" />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default BananaPage;
