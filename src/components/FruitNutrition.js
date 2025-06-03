import React from "react";
import { Pie } from "react-chartjs-2";
import { useInView } from "react-intersection-observer";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useTranslation, Trans } from "react-i18next";
import "./FruitNutrition.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const FruitNutrition = ({ variant = "blueberry" }) => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Zamjena tekstova s ključevima za prijevod
  const nutritionData = {
    blueberry: {
      labels: [t("Proteins"), t("Vitamin C"), t("Vitamin K"), t("Sugars"), t("Water")],
      data: inView ? [1.1, 9.7, 19.3, 10, 80] : [0, 0, 0, 0, 0],
      colors: ["#5b6e91", "#6a7d9b", "#8294a8", "#7186a1", "#8fa4bb"],
      title: t("Blueberry"),
      description: (
        <Trans i18nKey="blueberryDescription">
          <p>
            Blueberries are rich in antioxidants, vitamins C and K, and minerals. 
            They help fight inflammation, improve memory, and support heart health.
          </p>
          <p>
            They contain a low amount of proteins and sugars, and a high percentage of water,
            making them a refreshing and healthy choice.
          </p>
          <h3>Health Benefits</h3>
          <p>
            Blueberries are packed with antioxidants, especially anthocyanins, which protect the body 
            from free radicals. They are high in fiber, low in calories, and provide important vitamins like C and K.
            Great for memory, heart, and immunity.
          </p>
        </Trans>
      ),
    },
    pineapple: {
      labels: [t("Proteins"), t("Vitamin C"), t("Manganese"), t("Sugars"), t("Water")],
      data: inView ? [0.5, 47.8, 1.3, 13, 86] : [0, 0, 0, 0, 0],
      colors: ["#f3c96b", "#f5d88e", "#f7e0a8", "#ffe4a1", "#fff2cf"],
      title: t("Pineapple"),
      description: (
        <Trans i18nKey="pineappleDescription">
          <p>
            Pineapple is rich in vitamin C and manganese. It aids digestion and boosts immunity.
          </p>
          <p>
            It contains natural sugars, low fat and protein, and plenty of water,
            making it great for hydration.
          </p>
          <h3>Health Benefits</h3>
          <p>
            Bromelain in pineapple helps with digestion and has anti-inflammatory properties.
            Pineapple supports bone health and speeds up recovery.
          </p>
        </Trans>
      ),
    },
    strawberry: {
      labels: [t("Proteins"), t("Vitamin C"), t("Fiber"), t("Sugars"), t("Water")],
      data: inView ? [0.7, 58.8, 2.0, 7, 91] : [0, 0, 0, 0, 0],
      colors: ["#e35a6b", "#f99aa3", "#d76a7a", "#f3b2b9", "#fce6e8"],
      title: t("Strawberry"),
      description: (
        <Trans i18nKey="strawberryDescription">
          <p>
            Strawberries are low in calories and rich in vitamin C, fiber, and antioxidants.
          </p>
          <p>
            They support immune function, skin health, and digestion.
          </p>
          <h3>Health Benefits</h3>
          <p>
            Strawberries support heart health, reduce inflammation, and are packed with
            essential nutrients for overall wellness.
          </p>
        </Trans>
      ),
    },
    grape: {
      labels: [t("Proteins"), t("Vitamin C"), t("Vitamin K"), t("Sugars"), t("Water")],
      data: inView ? [0.6, 10.8, 14.6, 16, 81] : [0, 0, 0, 0, 0],
      colors: ["#4b8c5a", "#6fc88a", "#9ddbaf", "#87c59b", "#d0e7d8"],
      title: t("Grape"),
      description: (
        <Trans i18nKey="grapeDescription">
          <p>
            Grapes are rich in vitamins C and K, and antioxidants like resveratrol.
          </p>
          <p>
            They help protect the heart, reduce inflammation, and support skin health.
          </p>
          <h3>Health Benefits</h3>
          <p>
            Regular grape consumption may help reduce the risk of heart disease and boost immunity.
          </p>
        </Trans>
      ),
    },
    banana: {
      labels: [t("Proteins"), t("Vitamin C"), t("Vitamin B6"), t("Sugars"), t("Water")],
      data: inView ? [1.3, 8.7, 20, 12, 74] : [0, 0, 0, 0, 0],
      colors: ["#f4d35e", "#f7e570", "#f9eb99", "#f5d780", "#daa520"],
      title: t("Banana"),
      description: (
        <Trans i18nKey="bananaDescription">
          <p>
            Bananas are rich in vitamin B6, potassium, and fiber, and provide energy.
          </p>
          <p>
            They help regulate blood pressure and support muscle function.
          </p>
          <h3>Health Benefits</h3>
          <p>
            Bananas are a great source of quick energy and aid in digestion.
          </p>
        </Trans>
      ),
    },
  };

  const current = nutritionData[variant] || nutritionData.blueberry;

  const data = {
    labels: current.labels,
    datasets: [
      {
        data: current.data,
        backgroundColor: current.colors,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    animation: {
      animateRotate: true,
      duration: 1500,
    },
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  return (
    <div className={`nutrition-container ${variant}`} ref={ref}>
      <div className={`nutrition-text ${inView ? "animate-text" : ""}`}>
        <h2 id="nutritivnost">{t("Nutrition of")} {current.title}</h2>
        {current.description}
      </div>
      <div className="nutrition-chart">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default FruitNutrition;
