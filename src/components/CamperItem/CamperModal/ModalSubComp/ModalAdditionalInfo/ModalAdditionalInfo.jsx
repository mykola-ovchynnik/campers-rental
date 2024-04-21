import { useLocation } from 'react-router-dom';
import {
  AddInfoButtonsWrapper,
  AdditionalInfoButton,
  ModalInfo,
} from '../../CamperModal.styled';

export const ModalAdditionalInfo = ({ camper }) => {
  const location = useLocation();

  return (
    <ModalInfo>
      <AdditionalInfoButton
        to={`/catalog/${camper._id}/features`}
        state={{ from: location }}
        activeclassname="active"
      >
        Features
      </AdditionalInfoButton>
      <AdditionalInfoButton
        to={`/catalog/${camper._id}/reviews`}
        state={{ from: location }}
        activeclassname="active"
      >
        Reviews
      </AdditionalInfoButton>
    </ModalInfo>
  );
};
