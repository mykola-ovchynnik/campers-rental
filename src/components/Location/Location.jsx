import {
  StarLocationIcon,
  RatingLocation,
  RatingsLocationSpan,
} from '../../styles/StyledComponents';
import { ReactComponent as LocationSVG } from '../../icons/location.svg';

export const Location = ({ location }) => {
  return (
    <RatingsLocationSpan>
      <StarLocationIcon as={LocationSVG} />
      <RatingLocation>{`${location}`}</RatingLocation>
    </RatingsLocationSpan>
  );
};
