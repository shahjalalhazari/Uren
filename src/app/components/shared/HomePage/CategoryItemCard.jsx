import Image from "next/image";
import Link from "next/link";

const CategoryItemCard = ({ categoryItem }) => {
  return (
    <div className="bg-white flex flex-col items-center text-center border-t border-l border-b border-[#ddd] py-5">
      <Link href={`/categories/${encodeURIComponent(categoryItem.name)}`}>
        <Image
          src={categoryItem.image}
          width={200}
          height={220}
          alt={categoryItem.name}
        />
      </Link>
      {/* REPLACE */}
      <Link href={`/categories/${encodeURIComponent(categoryItem.name)}`}>
        <h2 className="text-lg font-semibold text-[#999] hover:text-primary">
          {categoryItem.name}
        </h2>
      </Link>
      <p className="text-blue-500">
        &#40;{categoryItem.quantity} products&#41;
      </p>
    </div>
  );
};

export default CategoryItemCard;
