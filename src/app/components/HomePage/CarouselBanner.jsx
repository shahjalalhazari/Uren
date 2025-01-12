"use client";
import Link from "next/link";
import PrimaryBtn from "../shared/PrimaryBtn";
import { useState } from "react";

const CarouselBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide index
  const [animationKey, setAnimationKey] = useState(0); // Force animation re-render

  const handleSlideChange = (index) => {
    setActiveIndex(index);
    setAnimationKey(animationKey + 1); // Trigger animation re-render
  };
  return (
    <div className="carousel w-full">
      {banners.map((banner, index) => {
        const animationStyle =
          index % 2 === 0 ? "animation-style-02" : "animation-style-01";
        const isActive = index === activeIndex;

        return (
          <div
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.9), rgba(0,0,0,0.3)), 
                url(/images/slider/${index + 1}.jpg)`,
            }}
            key={index}
            id={`slide${index + 1}`}
            className={`carousel-bg ${
              isActive ? `slick-active ${animationStyle}` : ""
            }`}
          >
            <div className="carousel-content">
              <div className="carousel-text space-y-5" key={animationKey}>
                <h5 className="carousel-sub-heading">{banner.subHeading}</h5>
                <h2 className="carousel-heading">{banner.heading}</h2>
                <div className="h-1 bg-secondary w-20 mx-auto rounded"></div>
                <p>{banner.description}</p>
                <PrimaryBtn text="READ MORE" path="/" />
              </div>
            </div>
            <div className="carousel-btns">
              <Link
                href={banner.prevSlide}
                className="carousel-left-btn"
                onClick={() =>
                  handleSlideChange(
                    (activeIndex - 1 + banners.length) % banners.length
                  )
                }
              >
                ❮
              </Link>
              <Link
                href={banner.nextSlide}
                className="carousel-right-btn"
                onClick={() =>
                  handleSlideChange((activeIndex + 1) % banners.length)
                }
              >
                ❯
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CarouselBanner;

const banners = [
  {
    heading: "Wheels & Tires",
    subHeading: "Save $120 when you buy",
    description:
      "Explore and immerse in exciting 360 content with Full dive’s all-in-one virtual reality platform",
    nextSlide: "#slide2",
    prevSlide: "#slide6",
  },
  {
    heading: "20% off Auto part",
    subHeading: "We have the part you need",
    description:
      "Explore and immerse in exciting 360 content with Full dive’s all-in-one virtual reality platform",
    nextSlide: "#slide3",
    prevSlide: "#slide1",
  },
  {
    heading: "Wheels & Tires",
    subHeading: "Save $120 when you buy",
    description:
      "Explore and immerse in exciting 360 content with Full dive’s all-in-one virtual reality platform",
    nextSlide: "#slide4",
    prevSlide: "#slide2",
  },
  {
    heading: "20% off Auto part",
    subHeading: "We have the part you need",
    description:
      "Explore and immerse in exciting 360 content with Full dive’s all-in-one virtual reality platform",
    nextSlide: "#slide5",
    prevSlide: "#slide3",
  },
  {
    heading: "Wheels & Tires",
    subHeading: "Save $120 when you buy",
    description:
      "Explore and immerse in exciting 360 content with Full dive’s all-in-one virtual reality platform",
    nextSlide: "#slide6",
    prevSlide: "#slide4",
  },
  {
    heading: "20% off Auto part",
    subHeading: "We have the part you need",
    description:
      "Explore and immerse in exciting 360 content with Full dive’s all-in-one virtual reality platform",
    nextSlide: "#slide1",
    prevSlide: "#slide5",
  },
];
