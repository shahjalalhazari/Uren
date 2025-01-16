import "./home-page.css";
import CarouselBanner from "./CarouselBanner";
import OfferBanners from "./OfferBanners";
import ShoppingFacilities from "./ShoppingFacilities";
import FeaturedCategories from "./FeaturedCategories";

const HomePage = () => {
  return (
    <div>
      <CarouselBanner />
      <OfferBanners />
      <ShoppingFacilities />
      <FeaturedCategories />
    </div>
  );
};

export default HomePage;
