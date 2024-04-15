import { formatPrice, ratingCalculator } from '../../utils/utils';
import {
  CamperItem,
  ListItemImage,
  ItemMainInfo,
  ItemName,
  ItemNamePrice,
  ItemPrice,
  ButtonShowMore,
} from './Camper.styled';
import {
  Button,
  CamperDescription,
  RatingLocationWrapper,
} from '../../styles/StyledComponents';
import { TotalRating } from '../TotalRating/TotalRating';
import { Location } from '../Location/Location';
import { FavoritesButton } from '../FavoritesButton/FavoritesButton';
import { CamperAttributes } from '../CamperAttributes/CamperAttributes';
import { useLocation } from 'react-router-dom';
import { getAttributes } from '../../utils/getAttributes';

export const Camper = ({ camper }) => {
  const location = useLocation();

  const price = formatPrice(camper.price);
  const rating = ratingCalculator(camper.reviews);
  const attributes = getAttributes(camper);

  return (
    <CamperItem>
      <ListItemImage src={camper.gallery[0]} />

      <ItemMainInfo>
        <ItemNamePrice>
          <ItemName>{camper.name}</ItemName>
          <ItemPrice>{price}</ItemPrice>
          <FavoritesButton id={camper._id} />
        </ItemNamePrice>

        <RatingLocationWrapper>
          <TotalRating rating={rating} reviews={camper.reviews.length} />
          <Location location={camper.location} />
        </RatingLocationWrapper>

        <CamperDescription>{camper.description}</CamperDescription>

        <CamperAttributes attributes={attributes} />

        <Button
          as={ButtonShowMore}
          to={`/campers/${camper._id}`}
          state={{ from: location }}
        >
          Show more
        </Button>
      </ItemMainInfo>
    </CamperItem>
  );
};
