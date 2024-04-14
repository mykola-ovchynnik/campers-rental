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

export const Camper = ({ camper }) => {
  const rating = ratingCalculator(camper.reviews);

  return (
    <CamperItem>
      <ListItemImage src={camper.gallery[0]} />
      <ItemMainInfo>
        <ItemNamePrice>
          <ItemName>{camper.name}</ItemName>

          <ItemPriceFavorite>
            <ItemPrice>{formatPrice(camper.price)}</ItemPrice>
            <FavoritesButton id={camper._id} />
          </ItemPriceFavorite>
        </ItemNamePrice>

        <RatingLocationWrapper>
          <TotalRating rating={rating} reviews={camper.reviews.length} />
          <Location location={camper.location} />
        </RatingLocationWrapper>

        <CamperDescription>{camper.description}</CamperDescription>

        <CamperAttributes />
        <ButtonShowMore>Show more</ButtonShowMore>
      </ItemMainInfo>
    </CamperItem>
  );
};
