import {
  CamperItem,
  ListItemImage,
  ItemMainInfo,
  ShowMoreBtn,
} from './Camper.styled';
import { CamperDescription } from '../../styles/StyledComponents';
import { CamperAttributes } from '../CamperAttributes/CamperAttributes';
import { CamperNamePrice } from './CamperSubComponents/ItemNamePrice';
import { RatingLocationComponent } from './CamperSubComponents/RatingLocation/RatingLocationComponent';
import defaultImage from '../../icons/van_rent.jpg';
import { showModal } from '../../store/modalReducer/modalReducer';

export const Camper = ({ camper }) => {
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

        <CamperAttributes camper={camper} />

        <ShowMoreBtn onClick={() => showModal(camper._id)}>
          Show more
        </ShowMoreBtn>
      </ItemMainInfo>
    </CamperItem>
  );
};
