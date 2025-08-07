import React, { useState, useEffect } from 'react';
import '../css/ImageSlider.css';

const images = [
   "/images/aachar.jpg",
  "/images/aalu tama.jpeg",
  "/images/bara.jpeg",
  "/images/bodi.jpeg",
  "/images/chatmari.jpg",
  "/images/buff choila.jpeg",
  "/images/dyakula.jpeg",
  "/images/sukuti.jpg",
  "/images/yomari.jpeg",
  "/images/khaja set.jpg",
];

function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // autoplay every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []); // empty array means run once

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="image-slider">
      <button className="slider-btn prev" onClick={prevImage}>‹</button>
      <img src={images[index]} alt={`Slide ${index}`} className="slide-image" />
      <button className="slider-btn next" onClick={nextImage}>›</button>
    </div>
  );
}

export default ImageSlider;
