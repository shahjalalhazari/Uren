import Image from "next/image";
import Link from "next/link";
import { BiHeart, BiShoppingBag } from "react-icons/bi";
import CountdownTimer from "../CountdownTimer";
import AddToCartBtn from "../../../../shared/Buttons/AddToCartBtn";
import CardTitle from "../CardTitle";
import ProductRating from "../../../../shared/ProductRating";
import OfferBadge from "@/app/components/shared/Badges/OfferBadge";
import NewItemBadge from "@/app/components/shared/Badges/NewItemBadge";
import OutlineBtn from "@/app/components/shared/Buttons/OutlineBtn";

const DealOfTheDayCard = () => {
  return (
    <div className="card-container">
      {/* Card Heading */}
      <CardTitle
        heading={"Deal Of The Day"}
        subHeading={"Special Offer Limited Time"}
      />
      {/* REPLACE */}
      {/* Product Image */}
      <div className="relative">
        <Link href="/">
          <Image
            src="/images/product/large-size/1.jpg"
            alt="Shoes"
            width={220}
            height={220}
            className="mx-auto m-0 p-0"
          />
        </Link>
        <div className="absolute top-5 left-0 space-y-2 text-center">
          <OfferBadge discountOf={33} />
          <NewItemBadge />
        </div>
      </div>

      {/* Countdown Timer */}
      <p className="text-secondary mb-2.5 text-sm">Hurry up! Offer ends in:</p>
      <CountdownTimer targetDate="2025-01-31T23:59:59" />

      {/* Product Content */}
      <div className="mt-4 deal-of-the-day">
        {/* Product Details */}
        {/* REPLACE */}
        <Link href={"/"}>
          <h4 className="product-name">Veniam officiis voluptates</h4>
        </Link>
        <div className="flex gap-4 items-center mt-3">
          <h2 className="new-price">$89.00</h2>
          <h5 className="old-price">$109.99</h5>
        </div>

        {/* Product Rating */}
        <ProductRating rating={3.5} />

        <div className="mt-4 flex justify-between">
          {/* Add to Cart Button */}
          {/* REPLACE */}
          <AddToCartBtn href={"/"} />

          {/* Add to Wishlist Button */}
          {/* REPLACE */}
          <OutlineBtn btnIcon={<BiHeart />} btnTitle={"Add To WishList"} />

          {/* Quick View Button */}
          {/* REPLACE */}
          <OutlineBtn btnIcon={<BiShoppingBag />} btnTitle={"Quick View"} />
        </div>
      </div>
    </div>
  );
};

export default DealOfTheDayCard;
