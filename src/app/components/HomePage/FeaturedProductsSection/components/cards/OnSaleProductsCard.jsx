import CardTitle from "../CardTitle";
import FeaturedSingleProductCard from "../FeaturedSingleProductCard";

const OnSaleProductsCard = () => {
  return (
    <div className="card-container">
      {/* Card Heading */}
      <CardTitle
        heading={"On-Sale Products"}
        subHeading={"On-Sale On This Week"}
      />
      {/* All Weekly Featured Products List */}
      <div className="h-[68vh] overflow-y-auto mt-4">
        {/* REPLACE */}
        {[...Array(10)].map((_, index) => (
          <FeaturedSingleProductCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default OnSaleProductsCard;
