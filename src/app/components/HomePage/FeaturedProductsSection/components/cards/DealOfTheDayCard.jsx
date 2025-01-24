import Image from "next/image";
import Link from "next/link";
import CountdownTimer from "../CountdownTimer";
import AddToCartBtn from "../../../../shared/AddToCartBtn";
import AddToWishlistBtn from "../../../../shared/AddToWishlistBtn";
import QuickViewBtn from "../../../../shared/QuickViewBtn";
import CardTitle from "../CardTitle";
import ProductRating from "../../../../shared/ProductRating";

const DealOfTheDayCard = () => {
  return (
    <div className="bg-base-100 w-full shadow-md pt-10 px-4 pb-4">
      {/* Card Heading */}
      <CardTitle
        heading={"Deal Of The Day"}
        subHeading={"Special Offer Limited Time"}
      />
      {/* REPLACE */}
      {/* Product Image */}
      <Link href="/">
        <Image
          src="/images/product/large-size/1.jpg"
          alt="Shoes"
          width={220}
          height={220}
          className="mx-auto m-0 p-0"
        />
      </Link>

      {/* Countdown Timer */}
      <p className="text-secondary mb-2.5 text-sm">Hurry up! Offer ends in:</p>
      <CountdownTimer targetDate="2025-01-31T23:59:59" />

      {/* Product Content */}
      <div className="mt-4">
        {/* Product Details */}
        {/* REPLACE */}
        <Link href={"/"}>
          <h4 className="text-dark text-xl font-semibold hover:text-primary">
            Veniam officiis voluptates
          </h4>
        </Link>
        <div className="flex gap-4 items-center mt-3">
          <h2 className="text-secondary text-2xl font-bold">$89.00</h2>
          <h5 className="text-[#999] line-through">$109.99</h5>
        </div>

        {/* Product Rating */}
        <ProductRating rating={3.5} />

        <div className="mt-4 flex justify-between">
          {/* Add to Cart Button */}
          {/* REPLACE */}
          <AddToCartBtn href={"/"} />

          {/* Add to Wishlist Button */}
          {/* REPLACE */}
          <AddToWishlistBtn />

          {/* Quick View Button */}
          {/* REPLACE */}
          <QuickViewBtn />
        </div>
      </div>
    </div>
  );
};

export default DealOfTheDayCard;
