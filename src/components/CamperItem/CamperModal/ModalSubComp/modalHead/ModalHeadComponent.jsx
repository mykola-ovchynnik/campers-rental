import { formatPrice } from '../../../../../utils/utils';
import { ItemName, ItemPrice } from '../../../Camper.styled';
import { RatingLocationComponent } from '../../../CamperSubComponents/RatingLocation/RatingLocationComponent';
import { ModalHead } from './ModalHead.styled';

export const ModalHeadComponent = ({ camper }) => {
  const price = formatPrice(camper.price);

  return (
    <ModalHead>
      <ItemName className="modalName">{camper.name}</ItemName>

      <RatingLocationComponent camper={camper} />

      <ItemPrice className="modalPrice">{price}</ItemPrice>
    </ModalHead>
  );
};
