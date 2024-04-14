import {
  LocationIcon,
  RatingLocation,
  RatingsLocationSpan,
} from '../../styles/StyledComponents';

export const Location = ({ location }) => {
  return (
    <RatingsLocationSpan>
      <LocationIcon />
      <RatingLocation>{`${location}`}</RatingLocation>
    </RatingsLocationSpan>
  );
};
