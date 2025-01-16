import "./home-page.css";
import CarouselBanner from "./CarouselBanner";
import OfferBanners from "./OfferBanners";
import ShoppingFacilities from "./ShoppingFacilities";

const HomePage = () => {
  return (
    <div>
      <CarouselBanner />
      <OfferBanners />
      <ShoppingFacilities />
    </div>
  );
};

export default HomePage;
