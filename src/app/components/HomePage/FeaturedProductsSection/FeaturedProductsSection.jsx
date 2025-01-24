import DealOfTheDayCard from "./components/cards/DealOfTheDayCard";
import WeeklyFeaturedProductsCard from "./components/cards/WeeklyFeaturedProductsCard";

const FeaturedProductsSection = () => {
  return (
    <div className="px-8 py-20 bg-[#eee] grid grid-cols-4 gap-x-8">
      {/* 1st Card | Deal Of The Day */}
      <DealOfTheDayCard />
      {/* 2nd Card | Weekly Featured Products */}
      <WeeklyFeaturedProductsCard />
    </div>
  );
};

export default FeaturedProductsSection;
