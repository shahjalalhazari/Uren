import Link from "next/link";
import React from "react";
import PrimaryBtn from "../shared/PrimaryBtn";

const CarouselBanner = () => {
  return (
    <div className="carousel w-full">
      {banners.map((banner, index) => (
        <div
          style={{
            backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0,0.9), rgba(0,0,0,0.3)),
              url(/images/slider/${index + 1}.jpg)`,
          }}
          key={index}
          id={`slide${index + 1}`}
          className="carousel-item relative w-full h-[90vh] bg-cover"
        >
          <div className="text-white text-center flex items-center lg:ml-[100px]">
            <div className="space-y-5">
              <h5 className="text-2xl text-secondary font-bold uppercase">
                {banner.subHeading}
              </h5>
              <h2 className="text-5xl text-primary uppercase font-bold">
                {banner.heading}
              </h2>
              <div className="h-1 bg-secondary w-20 mx-auto rounded"></div>
              <p className="">{banner.description}</p>
              <PrimaryBtn text={"READ MORE"} path={"/"} />
            </div>
          </div>
          <div className="absolute bottom-[50px] right-[50px] flex gap-3 transform justify-between">
            <Link
              href={banner.prevSlide}
              className="btn btn-circle border-none bg-sec hover:bg-secondary hover:text-white"
            >
              ❮
            </Link>
            <Link
              href={banner.nextSlide}
              className="btn btn-circle border-none bg-primary hover:bg-primary hover:text-secondary"
            >
              ❯
            </Link>
          </div>
        </div>
      ))}
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
