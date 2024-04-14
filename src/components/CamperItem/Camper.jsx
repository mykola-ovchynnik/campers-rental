import { formatPrice, ratingCalculator } from '../../utils/utils';
import {
  CamperItem,
  ListItemImage,
  ItemMainInfo,
  ItemName,
  ItemNamePrice,
  ItemPrice,
  ItemPriceFavorite,
  ButtonShowMore,
} from './Camper.styled';
import {
  CamperDescription,
  RatingLocationWrapper,
} from '../../styles/StyledComponents';
import { TotalRating } from '../TotalRating/TotalRating';
import { Location } from '../Location/Location';
import { FavoritesButton } from '../FavoritesButton/FavoritesButton';
import { CamperAttributes } from '../CamperAttributes/CamperAttributes';
import { useLocation } from 'react-router-dom';

export const Camper = ({ camper }) => {
  const location = useLocation();

  const rating = ratingCalculator(camper.reviews);

  return (
    <CamperItem>
      <ListItemImage src={camper.gallery[0]} />

      <ItemMainInfo>
        <ItemNamePrice>
          <ItemName>{camper.name}</ItemName>
          <ItemPrice>{formatPrice(camper.price)}</ItemPrice>
          <FavoritesButton id={camper._id} />
        </ItemNamePrice>

        <RatingLocationWrapper>
          <TotalRating rating={rating} reviews={camper.reviews.length} />
          <Location location={camper.location} />
        </RatingLocationWrapper>

        <CamperDescription>{camper.description}</CamperDescription>

        <CamperAttributes />

        <ButtonShowMore
          to={`/campers/${camper._id}`}
          state={{ from: location }}
        >
          Show more
        </ButtonShowMore>
      </ItemMainInfo>
    </CamperItem>
  );
};
