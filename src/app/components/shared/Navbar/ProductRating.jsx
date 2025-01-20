import { BiSolidStar, BiSolidStarHalf, BiStar } from "react-icons/bi";

const ProductRating = ({ rating = 0, totalStars = 5 }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      if (rating >= i) {
        // Full star
        stars.push(<BiSolidStar key={i} className="text-primary text-lg" />);
      } else if (rating > i - 1) {
        // Half star
        stars.push(
          <BiSolidStarHalf key={i} className="text-primary text-lg" />
        );
      } else {
        // Empty star
        stars.push(<BiStar key={i} className="text-[#999] text-lg" />);
      }
    }
    return stars;
  };
  return (
    <div className="flex items-center space-x-1 mt-2">{renderStars()}</div>
  );
};

export default ProductRating;
