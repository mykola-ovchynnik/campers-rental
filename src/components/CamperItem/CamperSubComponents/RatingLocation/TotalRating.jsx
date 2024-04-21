import { ReactComponent as StarSVG } from '../../../../icons/star.svg';
import { ratingCalculator } from '../../../../utils/utils';
import {
  RatingLocation,
  RatingsLocationSpan,
  StarLocationIcon,
} from './RatingLocation.styled';

export const TotalRating = ({ reviews }) => {
  const isArray = Array.isArray(reviews);
  const rating = isArray ? ratingCalculator(reviews) : 0;
  const reviewsCount = isArray ? reviews.length : 0;

  return (
    <RatingsLocationSpan>
      <StarLocationIcon as={StarSVG} />
      <RatingLocation className="rating">
        {rating >= 0 ? `${rating} (${reviewsCount} Reviews)` : 'No reviews'}
      </RatingLocation>
    </RatingsLocationSpan>
  );
};
