import {
  RatingLocation,
  RatingsLocationSpan,
  StarLocationIcon,
} from '../../styles/StyledComponents';
import { ReactComponent as StarSVG } from '../../icons/star.svg';

export const TotalRating = ({ rating, reviews }) => {
  return (
    <RatingsLocationSpan>
      <StarLocationIcon as={StarSVG} />
      <RatingLocation className="rating">
        {`${rating}`}
        {`(${reviews} Reviews)`}
      </RatingLocation>
    </RatingsLocationSpan>
  );
};
