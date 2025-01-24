import Image from "next/image";
import CardTitle from "../CardTitle";
import Link from "next/link";
import ProductRating from "@/app/components/shared/ProductRating";
import WeeklyProductCard from "../WeeklyProductCard";

const WeeklyFeaturedProductsCard = () => {
  // const truncateText = (text, maxLength) => {
  //   return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  // };
  return (
    <div className="bg-base-100 w-full shadow-md pt-10 px-4 pb-4 max-h-[96vh]">
      {/* Card Heading */}
      <CardTitle
        heading={"Featured Products"}
        subHeading={"Top Featured On This Week"}
      />

      {/* All Weekly Featured Products List */}
      <div className="h-[75vh] overflow-y-auto mt-4">
        {/* REPLACE */}
        {[...Array(10)].map((_, index) => (
          <WeeklyProductCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default WeeklyFeaturedProductsCard;
