import { ItemName, ItemNamePrice, ItemPrice } from '../Camper.styled';
import { formatPrice } from '../../../utils/utils';
import { FavoritesButton } from './FavoritesButton/FavoritesButton';

export const CamperNamePrice = ({ camper }) => {
  const price = formatPrice(camper.price);

  return (
    <ItemNamePrice>
      <ItemName>{camper.name}</ItemName>
      <ItemPrice>{price}</ItemPrice>
      <FavoritesButton id={camper._id} />
    </ItemNamePrice>
  );
};
