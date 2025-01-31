import CardTitle from "../CardTitle";
import FeaturedSingleProductCard from "../FeaturedSingleProductCard";

const WeeklyFeaturedProductsCard = () => {
  return (
    <div className="card-container max-h-[88vh]">
      {/* Card Heading */}
      <CardTitle
        heading={"Featured Products"}
        subHeading={"Top Featured On This Week"}
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

export default WeeklyFeaturedProductsCard;
