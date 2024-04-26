import { RatingLocation, RatingsLocationSpan, StarLocationIcon } from './RatingLocation.styled';
import icons from '../../../../icons/icons.svg';

export const Location = ({ location }) => {
  return (
    <RatingsLocationSpan>
      <StarLocationIcon>
        <use xlinkHref={`${icons}#icon-location`} />
      </StarLocationIcon>
      <RatingLocation>{`${location}`}</RatingLocation>
    </RatingsLocationSpan>
  );
};
