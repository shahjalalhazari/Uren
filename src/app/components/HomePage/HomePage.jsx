import "./home-page.css";
import CarouselBanner from "./CarouselBanner";
import OfferBanners from "./OfferBanners";

const HomePage = () => {
  return (
    <div>
      <CarouselBanner />
      <OfferBanners deviceType="desktop" />
    </div>
  );
};

export default HomePage;
