import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./FruitGrowingGuide.css";

const FruitGrowingGuide = ({
  title,
  segments,
  details,
  growthImagePath,
  growthImageAlt = "Growth stages image",
  variant = "blueberry",
}) => {
  const { t } = useTranslation();

  const detailRef = useRef(null);
  const segmentRef = useRef(null);
  const segmentsInView = useInView(segmentRef, { once: true, amount: 0.2 });
  const detailsInView = useInView(detailRef, { once: true, amount: 0.2 });

  return (
    <section className={`fruit-guide-container ${variant}`}>
      <h1 className="fruit-guide-title">{t(title)}</h1>

      <div className="segments-container" ref={segmentRef}>
        {segments.map(({ emoji, title, content }, idx) => (
          <motion.div
            className="segment"
            key={idx}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={
              segmentsInView
                ? { opacity: 1, y: 0, scale: 1 }
                : {}
            }
            transition={{
              duration: 0.5,
              delay: idx * 0.2,
              ease: "easeOut",
            }}
          >
            <div className="segment-emoji">{emoji}</div>
            <h3 className="segment-title">{t(title)}</h3>
            <p className="segment-content">{t(content)}</p>
          </motion.div>
        ))}
      </div>

      <div className="details-container" ref={detailRef}>
        <h2>{t("Detailed")}</h2>
        {details.map(({ heading, text }, idx) => (
          <motion.div
            className="detail"
            key={idx}
            initial={{ opacity: 0, y: -50 }}
            animate={detailsInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: idx * 0.3,
              ease: "easeOut",
            }}
          >
            <h4>{t(heading)}</h4>
            <p>{t(text)}</p>
          </motion.div>
        ))}
      </div>

      {growthImagePath && (
        <div className="growth-image-container">
          <img src={growthImagePath} alt={growthImageAlt} />
        </div>
      )}
    </section>
  );
};

export default FruitGrowingGuide;
