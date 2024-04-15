import { useDispatch, useSelector } from 'react-redux';
import {
  addFavorite,
  removeFavorite,
  selectorFavorites,
} from '../../../../store/favoritesReducer/favoritesSlice';
import { HeartButton, HeartIcon } from '../../../../styles/StyledComponents';

export const FavoritesButton = ({ id }) => {
  const favorites = useSelector(selectorFavorites);
  const dispatch = useDispatch();
  const isFavorite = favorites.includes(id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };
  return (
    <HeartButton onClick={handleFavoriteClick}>
      <HeartIcon isfavorite={isFavorite ? 'true' : undefined} />
    </HeartButton>
  );
};
