import "./components/HomePage/home-page.css";
import CarouselBannerSection from "./components/HomePage/CarouselBannerSection/CarouselBannerSection";
import OfferBannersSection from "./components/HomePage/OfferBannersSection/OfferBannersSection";
import ShoppingFacilitiesSection from "./components/HomePage/ShoppingFacilitiesSection/ShoppingFacilitiesSection";
import FeaturedCategoriesSection from "./components/HomePage/FeaturedCategoriesSection/FeaturedCategoriesSection";
import FeaturedProductsSection from "./components/HomePage/FeaturedProductsSection/FeaturedProductsSection";
import OfferBigBannerSection from "./components/HomePage/OfferBigBannerSection/OfferBigBannerSection";
import NewArrivalProductsSection from "./components/HomePage/NewArrivalProductsSection/NewArrivalProductsSection";
import TestimonialSection from "./components/HomePage/TestimonialSection/TestimonialSection";
import ShopByBrands from "./components/HomePage/ShopByBrands/ShopByBrands";
import BlogsSection from "./components/HomePage/BlogsSection/BlogsSection";

export default function Home() {
  return (
    <>
      <CarouselBannerSection />
      <OfferBannersSection />
      <ShoppingFacilitiesSection />
      <FeaturedCategoriesSection />
      <FeaturedProductsSection />
      <OfferBigBannerSection />
      <NewArrivalProductsSection />
      <TestimonialSection />
      <ShopByBrands />
      <BlogsSection/>
    </>
  );
}
