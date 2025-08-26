"use client"; // nécessaire si tu es dans Next.js 13+ avec app router

import { useState } from "react";

export default function Slider() {
    const slides = [
        "/img1.png",
        "/img2.png",  
        "/img3.jpg",
         "/img4.jpg",
    ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlider = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlider = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-8xl mx-auto mt-6 rounded-2xl shadow-lg">
      {/* Image */}
      <div className="overflow-hidden rounded-2xl flex items-center justify-center h-72">
        <img
          src={slides[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full object-cover object-contain transition-all duration-500"
        //   className="w-full h-72 object-cover align-center transition-all duration-500"
        />
      </div>

      {/* Buttons */}
      <button
        onClick={prevSlider}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlider}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow"
      >
        &#10095;
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {/* on creer une bourcle sur le slide en ignorant la valeur du tableau mais en considerant l'index */}
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
