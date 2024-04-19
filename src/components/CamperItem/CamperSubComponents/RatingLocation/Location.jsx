import { ReactComponent as LocationSVG } from '../../../../icons/location.svg';
import {
  RatingLocation,
  RatingsLocationSpan,
  StarLocationIcon,
} from './RatingLocation.styled';

export const Location = ({ location }) => {
  return (
    <RatingsLocationSpan>
      <StarLocationIcon as={LocationSVG} />
      <RatingLocation>{`${location}`}</RatingLocation>
    </RatingsLocationSpan>
  );
};
