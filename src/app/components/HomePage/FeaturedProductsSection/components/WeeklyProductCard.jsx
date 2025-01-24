import ProductRating from "@/app/components/shared/ProductRating";
import Image from "next/image";
import Link from "next/link";

const WeeklyProductCard = () => {
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };
  return (
    <div className="grid grid-cols-3 items-center py-2 border-b-2 last:border-none hover:shadow-md">
      {/* REPLACE */}
      <Link href={"/"}>
        <Image
          src={`/images/product/small-size/1.jpg`}
          width={"120"}
          height={"120"}
          alt={`Product 1`}
          className="w-full h-auto"
        />
      </Link>
      <div className="col-span-2">
        <ProductRating rating={3.5} />
        {/* REPLACE */}
        <Link href={"/"}>
          <h3 className="text-[#999] leading-4 my-2 hover:text-secondary text-sm">
            {truncateText(
              "Veniam officiis volupt ates eveniet culpaqui saepe.",
              40
            )}
          </h3>
        </Link>
        <h2 className="text-blue-500 text-lg font-semibold">$89.00</h2>
      </div>
    </div>
  );
};

export default WeeklyProductCard;
