import React, { useState, useEffect } from "react";
import slide1 from "./Images/slide1.jpg";
import slide2 from "./Images/slide2.jpg";
import image1 from "./Images/image1.jpg";
import image2 from "./Images/image2.jpg";
import image3 from "./Images/image3.jpg";

const SliderData = [slide1, slide2, image1, image2, image3];

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slides] = useState(SliderData);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  function handlePrevClick() {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }

  function handleNextClick() {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  }

  return (
    <div className="relative w-full">
      <div className="relative" data-Slider="static">
        <div className="overflow-hidden relative">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`duration-700 ease-in ${activeSlide === index ? "block" : "hidden"
                }`}
              data-Slider-item
            >
              <img
                src={slide}
                className="block object-cover w-full h-60 sm:h-80 lg:h-96"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="flex absolute bottom-3 left-1/2 z-30 space-x-1 -translate-x-1/2">
          {slides.map((slide, index) => (
            <button
              key={index}
              type="button"
              className={`w-2 h-2 rounded-full ${activeSlide === index ? "bg-white" : "bg-gray-300"
                }`}
              aria-current={activeSlide === index}
              aria-label={`Slide ${index + 1}`}
              data-Slider-slide-to={index}
            ></button>
          ))}
        </div>
        <button
          type="button"
          className="flex absolute top-1/2 left-2 z-30 justify-center items-center px-2 h-8 cursor-pointer group focus:outline-none md:hidden"
          data-Slider-prev
          onClick={handlePrevClick}        
        >
          <span className="inline-flex justify-center items-center w-6 h-6 rounded-full sm:w-8 sm:h-8 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover-bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="hidden">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="flex absolute top-1/2 right-2 z-30 justify-center items-center px-2 h-8 cursor-pointer group focus:outline-none md:hidden"
          data-Slider-next
          onClick={handleNextClick}
        >
          <span className="inline-flex justify-center items-center w-6 h-6 rounded-full sm:w-8 sm:h-8 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover-bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="hidden">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
