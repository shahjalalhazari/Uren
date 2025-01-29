import React from "react";
import SectionHeading from "../../shared/SectionHeading";
import Image from "next/image";
import PrimaryBtn from "../../shared/Buttons/PrimaryBtn";

const ShopByBrands = () => {
  return (
    <div className="mx-8 py-0 my-20 text-center">
      <SectionHeading
        heading="Shop By Brands"
        subHeading="Top Quality Partner"
      />

      {/* Brands Lists */}
      <div className="grid grid-cols-6 w-full mt-8 mb-12 border-y border-l border-[#999]">
        {[...Array(6)].map((brand, index) => (
          <Image
            key={index}
            src={`/images/brand/${index + 1}.jpg`}
            width={175}
            height={150}
            alt="Brand 1"
            className="py-5 px-10 w-full border-r  border-[#999]"
          />
        ))}
      </div>
      {/* REPLACE */}
      <PrimaryBtn text={"See More"} path={"/"} />
    </div>
  );
};

export default ShopByBrands;
