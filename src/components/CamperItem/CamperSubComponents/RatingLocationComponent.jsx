import { RatingLocationWrapper } from '../../../styles/StyledComponents';
import { Location } from './Location';
import { TotalRating } from './TotalRating';

export const RatingLocationComponent = ({ camper }) => {
  return (
    <RatingLocationWrapper>
      <TotalRating reviews={camper.reviews} />
      <Location location={camper.location} />
    </RatingLocationWrapper>
  );
};
