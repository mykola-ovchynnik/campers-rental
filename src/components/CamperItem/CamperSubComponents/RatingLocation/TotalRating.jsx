import { ReactComponent as StarSVG } from '../../../../icons/star.svg';
import { ratingCalculator } from '../../../../utils/utils';
import {
  RatingLocation,
  RatingsLocationSpan,
  StarLocationIcon,
} from './RatingLocation.styled';

export const TotalRating = ({ reviews }) => {
  const rating = Array.isArray(reviews) ? ratingCalculator(reviews) : 0;

  return (
    <RatingsLocationSpan>
      <StarLocationIcon as={StarSVG} />
      <RatingLocation className="rating">
        {rating >= 0 ? `${rating} (${reviews.length} Reviews)` : 'No reviews'}
      </RatingLocation>
    </RatingsLocationSpan>
  );
};
