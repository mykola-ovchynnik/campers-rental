import { RatingLocationWrapper } from './RatingLocation.styled';
import { TotalRating } from './TotalRating';
import { Location } from './Location';

export const RatingLocationComponent = ({ camper }) => {
  return (
    <RatingLocationWrapper>
      <TotalRating reviews={camper.reviews} />
      <Location location={camper.location} />
    </RatingLocationWrapper>
  );
};
