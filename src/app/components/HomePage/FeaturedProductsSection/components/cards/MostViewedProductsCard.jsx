import React from "react";
import CardTitle from "../CardTitle";
import FeaturedSingleProductCard from "../FeaturedSingleProductCard";

const MostViewedProductsCard = () => {
  return (
    <div className="card-container">
      {/* Card Heading */}
      <CardTitle
        heading={"Most View Products"}
        subHeading={"Most View On This Week"}
      />
      {/* All Weekly Featured Products List */}
      <div className="h-[75vh] overflow-y-auto mt-4">
        {/* REPLACE */}
        {[...Array(10)].map((_, index) => (
          <FeaturedSingleProductCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default MostViewedProductsCard;
