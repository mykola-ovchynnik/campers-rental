import {
  RatingLocation,
  RatingsLocationSpan,
  StarIcon,
} from '../../styles/StyledComponents';

export const TotalRating = ({ rating, reviews }) => {
  return (
    <RatingsLocationSpan>
      <StarIcon />
      <RatingLocation className="rating">
        {`${rating}`}
        {`(${reviews} Reviews)`}
      </RatingLocation>
    </RatingsLocationSpan>
  );
};
