import {
  RatingLocation,
  RatingsLocationSpan,
  StarLocationIcon,
} from '../../../styles/StyledComponents';
import { ReactComponent as StarSVG } from '../../../icons/star.svg';
import { ratingCalculator } from '../../../utils/utils';

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
