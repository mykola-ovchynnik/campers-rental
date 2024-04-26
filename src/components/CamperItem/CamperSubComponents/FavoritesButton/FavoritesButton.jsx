import { useDispatch, useSelector } from 'react-redux';
import {
  addFavorite,
  removeFavorite,
  selectorFavorites,
} from '../../../../store/favoritesReducer/favoritesSlice';
import { HeartButton, HeartIcon } from './FavoritesButton.styled';
import icons from '../../../../icons/icons.svg';

export const FavoritesButton = ({ camper }) => {
  const favorites = useSelector(selectorFavorites);
  const dispatch = useDispatch();
  const isFavorite = favorites.some(favorite => favorite._id === camper._id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(camper));
    } else {
      dispatch(addFavorite(camper));
    }
  };

  return (
    <HeartButton onClick={handleFavoriteClick}>
      <HeartIcon isfavorite={isFavorite ? 'true' : undefined}>
        <use xlinkHref={`${icons}#icon-heart`} />
      </HeartIcon>
    </HeartButton>
  );
};
