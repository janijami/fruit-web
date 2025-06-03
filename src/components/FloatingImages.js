import React from "react";
import "./FloatingImages.css";

import blueberry1 from "../images/blueberry-3.png";
import blueberry2 from "../images/Blueberry-PNG-High-Quality-Image.png";

import pineapple1 from "../images/pineapple-slice.png";
import pineapple2 from "../images/pineapple-whole.png";

import strawberry1 from "../images/strawberry1.png";
import strawberry2 from "../images/strawberry2.png";

import grape1 from "../images/grape1.png";
import grape2 from "../images/grape2.png";

import banana1 from "../images/banana1.png";
import banana2 from "../images/banana2.png";

import leaf1 from "../images/pngtree-vibrant-3d-green-leaf-render-png-image_14335661.png";
import leaf2 from "../images/png-clipart-leaf-1-single-green-leaf-thumbnail.png";

function FloatingImages({ variant = "blueberry" }) {
  let images;

  switch (variant) {
    case "pineapple":
      images = [
        { src: pineapple1, alt: "Pineapple Slice" },
        { src: pineapple2, alt: "Pineapple Whole" },
        { src: leaf1, alt: "Leaf" },
        { src: leaf1, alt: "Leaf" },
        { src: pineapple1, alt: "Pineapple Slice" },
        { src: pineapple2, alt: "Pineapple Whole" },
        { src: leaf2, alt: "Leaf" },
        { src: leaf2, alt: "Leaf" },
      ];
      break;

    case "strawberry":
      images = [
        { src: strawberry1, alt: "Strawberry" },
        { src: strawberry2, alt: "Strawberry" },
        { src: leaf1, alt: "Leaf" },
        { src: leaf1, alt: "Leaf" },
        { src: strawberry1, alt: "Strawberry" },
        { src: strawberry2, alt: "Strawberry" },
        { src: leaf2, alt: "Leaf" },
        { src: leaf2, alt: "Leaf" },
      ];
      break;

    case "grape":
      images = [
        { src: grape1, alt: "Grape" },
        { src: grape2, alt: "Grape" },
        { src: leaf1, alt: "Leaf" },
        { src: leaf1, alt: "Leaf" },
        { src: grape1, alt: "Grape" },
        { src: grape2, alt: "Grape" },
        { src: leaf2, alt: "Leaf" },
        { src: leaf2, alt: "Leaf" },
      ];
      break;

    case "banana":
      images = [
        { src: banana1, alt: "Banana" },
        { src: banana2, alt: "Banana" },
        { src: leaf1, alt: "Leaf" },
        { src: leaf1, alt: "Leaf" },
        { src: banana1, alt: "Banana" },
        { src: banana2, alt: "Banana" },
        { src: leaf2, alt: "Leaf" },
        { src: leaf2, alt: "Leaf" },
      ];
      break;

    case "blueberry":
    default:
      images = [
        { src: blueberry1, alt: "Blueberry" },
        { src: blueberry2, alt: "Blueberry" },
        { src: leaf1, alt: "Leaf" },
        { src: leaf1, alt: "Leaf" },
        { src: blueberry1, alt: "Blueberry" },
        { src: blueberry2, alt: "Blueberry" },
        { src: leaf2, alt: "Leaf" },
        { src: leaf2, alt: "Leaf" },
      ];
      break;
  }

  return (
    <div className={`floating-images ${variant}-mode`}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt={img.alt}
          className={`float float${index + 1}`}
        />
      ))}
    </div>
  );
}

export default FloatingImages;
