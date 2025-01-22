import Image from "next/image";
import Link from "next/link";
import { BiHeart } from "react-icons/bi";
import { FaRegShareSquare } from "react-icons/fa";
import CountdownTimer from "./components/CountdownTimer";
import ProductRating from "../shared/Navbar/ProductRating";
import AddToCartBtn from "../shared/AddToCartBtn";
import AddToWishlistBtn from "../shared/AddToWishlistBtn";
import QuickViewBtn from "../shared/QuickViewBtn";

const FeaturedProductsSection = () => {
  return (
    <div className="px-8 py-20 bg-[#eee] grid grid-cols-4 gap-x-8">
      <div className="bg-base-100 w-full shadow-md pt-10 px-4 pb-4">
        <div className="text-center">
          <h6 className="text-[#999] mb-1">Special Offer Limited Time</h6>
          <h2 className="font-semibold text-2xl">Deal Of The Day</h2>
        </div>
        {/* REPLACE */}
        <Link href="/">
          <Image
            src="/images/product/large-size/1.jpg"
            alt="Shoes"
            width={300}
            height={200}
          />
        </Link>
        <div className="">
          <div className="">
            <p className="text-secondary mb-2.5 text-sm">
              Hurry up! Offer ends in:
            </p>
            <CountdownTimer targetDate="2025-01-31T23:59:59" />
          </div>

          {/* Product Content */}
          <div className="mt-4">
            <h4 className="card-title">Veniam officiis voluptates</h4>
            <div className="flex gap-4 items-center mt-3">
              <h2 className="text-secondary text-2xl font-bold">$89.00</h2>
              <h5 className="text-[#999] line-through">$109.99</h5>
            </div>
            {/* Product Rating */}
            <ProductRating rating={3.5} totalStars={5} />

            <div className="mt-4 flex justify-between">
              {/* REPLACE */}
              {/* Add to Cart Button */}
              <AddToCartBtn href={"/"} />

              {/* REPLACE */}
              {/* Add to Wishlist Button */}
              <AddToWishlistBtn />

              {/* REPLACE */}
              {/* Quick View Button */}
              <QuickViewBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductsSection;
