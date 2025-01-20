import "./components/HomePage/home-page.css";
import CarouselBannerSection from "./components/HomePage/CarouselBannerSection";
import OfferBannersSection from "./components/HomePage/OfferBannersSection";
import ShoppingFacilitiesSection from "./components/HomePage/ShoppingFacilitiesSection";
import FeaturedCategoriesSection from "./components/HomePage/FeaturedCategoriesSection";
import FeaturedProductsSection from "./components/HomePage/FeaturedProductsSection";

export default function Home() {
  return (
    <>
      <CarouselBannerSection />
      <OfferBannersSection />
      <ShoppingFacilitiesSection />
      <FeaturedCategoriesSection />
      <FeaturedProductsSection />
    </>
  );
}
