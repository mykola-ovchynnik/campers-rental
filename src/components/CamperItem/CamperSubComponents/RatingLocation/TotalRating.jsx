import { ReactComponent as StarSVG } from '../../../../icons/star.svg';
import { ratingCalculator } from '../../../../utils/utils';
import {
  RatingLocation,
  RatingsLocationSpan,
  StarLocationIcon,
} from './RatingLocation.styled';

export const TotalRating = ({ reviews }) => {
  const rating = ratingCalculator(reviews);

  return (
    <RatingsLocationSpan>
      <StarLocationIcon as={StarSVG} />
      <RatingLocation className="rating">
        {`${rating}`}
        {`(${reviews.length} Reviews)`}
      </RatingLocation>
    </RatingsLocationSpan>
  );
};
