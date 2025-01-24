import { BiSolidStar, BiSolidStarHalf, BiStar } from "react-icons/bi";

const ProductRating = ({ rating }) => {
  const renderStars = () => {
    const totalStars = 5;

    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      if (rating >= i) {
        // Full star
        stars.push(<BiSolidStar key={i} className="text-primary" />);
      } else if (rating > i - 1) {
        // Half star
        stars.push(<BiSolidStarHalf key={i} className="text-primary" />);
      } else {
        // Empty star
        stars.push(<BiStar key={i} className="text-[#999]" />);
      }
    }
    return stars;
  };
  return (
    <div className="flex items-center space-x-1 mt-2">{renderStars()}</div>
  );
};

export default ProductRating;
