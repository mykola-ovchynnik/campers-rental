import {
  CamperItem,
  ListItemImage,
  ItemMainInfo,
  ShowMoreBtn,
  CamperDescription,
} from './Camper.styled';
import { CamperAttributes } from '../CamperAttributes/CamperAttributes';
import { CamperNamePrice } from './CamperSubComponents/ItemNamePrice';
import { RatingLocationComponent } from './CamperSubComponents/RatingLocation/RatingLocationComponent';
import defaultImage from '../../icons/van_rent.jpg';
import { useLocation } from 'react-router-dom';
import { getAttributes } from '../../utils/getAttributes';

export const Camper = ({ camper }) => {
  const location = useLocation();
  const attributes = getAttributes(camper);

  return (
    <CamperItem>
      <ListItemImage
        src={camper.gallery[0]}
        alt="Camper image"
        onError={e => {
          e.target.onerror = null;
          e.target.src = defaultImage;
        }}
      />

      <ItemMainInfo>
        <CamperNamePrice camper={camper} />

        <RatingLocationComponent camper={camper} />

        <CamperDescription>{camper.description}</CamperDescription>

        <CamperAttributes attributes={attributes} />

        <ShowMoreBtn to={`/catalog/${camper._id}`} state={{ from: location }}>
          Show more
        </ShowMoreBtn>
      </ItemMainInfo>
    </CamperItem>
  );
};
