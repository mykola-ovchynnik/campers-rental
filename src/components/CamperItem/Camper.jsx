import {
  CamperItem,
  ListItemImage,
  ItemMainInfo,
  ButtonShowMore,
} from './Camper.styled';
import { CamperDescription } from '../../styles/StyledComponents';
import { CamperAttributes } from '../CamperAttributes/CamperAttributes';
import { CamperNamePrice } from './CamperSubComponents/ItemNamePrice';
import { RatingLocationComponent } from './CamperSubComponents/RatingLocation/RatingLocationComponent';
import { ShowMoreBtn } from './CamperModal/CamperModal.styled';

export const Camper = ({ camper }) => {
  return (
    <CamperItem>
      <ListItemImage src={camper.gallery[0]} />

      <ItemMainInfo>
        <CamperNamePrice camper={camper} />

        <RatingLocationComponent camper={camper} />

        <CamperDescription>{camper.description}</CamperDescription>

        <CamperAttributes camper={camper} />

        <ShowMoreBtn as={ButtonShowMore}>Show more</ShowMoreBtn>
      </ItemMainInfo>
    </CamperItem>
  );
};
