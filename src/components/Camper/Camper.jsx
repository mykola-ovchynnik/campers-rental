import { formatPrice } from '../../utils/utils';
import {
  CamperItem,
  CamperItemImage,
  CamperItemMainInfo,
  CamperItemName,
  CamperItemNamePrice,
  CamperItemPrice,
  CamperItemPriceFavorite,
  HeartButton,
} from './Camper.styled';
import { ReactComponent as HeartIcon } from '../../icons/heart.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavorite,
  removeFavorite,
  selectorFavorites,
} from '../../store/favoritesReducer/favoritesSlice';

export const Camper = ({ id, img, name, price }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectorFavorites);
  const isFavorite = favorites.includes(id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  return (
    <CamperItem>
      <CamperItemImage src={img} />
      <CamperItemMainInfo>
        <CamperItemNamePrice>
          <CamperItemName>{name}</CamperItemName>
          <CamperItemPriceFavorite>
            <CamperItemPrice>{formatPrice(price)}</CamperItemPrice>

            <HeartButton onClick={handleFavoriteClick}>
              <HeartIcon
                fill={isFavorite ? '#E44848' : 'none'}
                stroke={isFavorite ? 'none' : '#101828'}
              />
            </HeartButton>
          </CamperItemPriceFavorite>
        </CamperItemNamePrice>
        <div className="reviewLocation">
          <span>
            <svg>star</svg>
            rating
            <p>total reviews</p>
          </span>
          <span>
            <svg>map_pin_svg</svg>
            location
          </span>
        </div>
        <p>desciption</p>
        <ul>
          list of attributes
          <li>
            <svg></svg>2 adults
          </li>
        </ul>
        <button>show more button</button>
      </CamperItemMainInfo>
    </CamperItem>
  );
};
