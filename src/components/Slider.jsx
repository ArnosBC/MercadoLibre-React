import React, { useState, useEffect } from "react";
import { SliderImg, SliderImgMobile } from "../data/SliderImg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? SliderImg.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === SliderImg.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const handleResizeImage = () => {
      if (window.innerWidth >= 1024) {
        setImages(SliderImg);
      } else {
        setImages(SliderImgMobile);
      }
    };

    window.addEventListener("resize", handleResizeImage);
    handleResizeImage();

    return () => {
      window.removeEventListener("resize", handleResizeImage);
    };
  }, [SliderImgMobile, SliderImg]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden relative bg-gradient-to-b from-[#ffeb3b]">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image.imgUrl}
              alt={`Slide ${index}`}
              className="w-full px-3 py-2 rounded-[30px] lg:rounded-none lg:py-0 lg:px-0 lg:h-[400px] flex-shrink-0"
            />
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-500 p-2 rounded-r-full h-[100px] px-5 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Previous slide"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-500 p-2 rounded-l-full h-[100px] px-5 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Next slide"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Slider;
