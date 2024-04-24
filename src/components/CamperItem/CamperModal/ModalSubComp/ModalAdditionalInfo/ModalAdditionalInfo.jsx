import { useLocation } from 'react-router-dom';
import { AdditionalInfoButton, ModalInfo } from '../../CamperModal.styled';

export const ModalAdditionalInfo = ({ camper }) => {
  const location = useLocation();
  const basePath = location.pathname.includes('favorites')
    ? '/favorites'
    : '/catalog';

  return (
    <ModalInfo>
      <AdditionalInfoButton
        to={`${basePath}/${camper._id}/features`}
        state={{ from: location }}
        activeclassname="active"
      >
        Features
      </AdditionalInfoButton>
      <AdditionalInfoButton
        to={`${basePath}/${camper._id}/reviews`}
        state={{ from: location }}
        activeclassname="active"
      >
        Reviews
      </AdditionalInfoButton>
    </ModalInfo>
  );
};
