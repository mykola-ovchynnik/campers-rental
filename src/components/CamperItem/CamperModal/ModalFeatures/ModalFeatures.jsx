import { useSelector } from 'react-redux';
import { singleCamperSelector } from '../../../../store/campersReducer/campersSlice';
import { getAttributes } from '../../../../utils/getAttributes';
import { CamperAttributes } from '../../../CamperAttributes/CamperAttributes';
import {
  FeaturesWrapper,
  ModalDetails,
  ModalDetailsItem,
  ModalDetailsList,
  ModalDetailsText,
  ModalDetailsTitle,
} from './ModalFeatures.styled';
import BookingForm from '../../../Forms/BookingForm';
import { AdditionalInfoWrapper } from '../CamperModal.styled';

const ModalFeatures = () => {
  const camper = useSelector(singleCamperSelector);
  const attributes = getAttributes(camper, true);

  // Vehicle details to display
  const vehicleDetails = [
    { name: 'Form', value: camper.form },
    { name: 'Length', value: camper.length },
    { name: 'Width', value: camper.width },
    { name: 'Height', value: camper.height },
    { name: 'Tank', value: camper.tank },
    { name: 'Consumption', value: camper.consumption },
  ];

  return (
    <AdditionalInfoWrapper>
      <FeaturesWrapper>
        <CamperAttributes attributes={attributes} />
        <ModalDetails>
          <ModalDetailsTitle>Vehicle details</ModalDetailsTitle>
          <ModalDetailsList>
            {vehicleDetails.map((detail, index) => (
              <ModalDetailsItem key={index}>
                <ModalDetailsText>{detail.name}</ModalDetailsText>
                <ModalDetailsText>{detail.value}</ModalDetailsText>
              </ModalDetailsItem>
            ))}
          </ModalDetailsList>
        </ModalDetails>
      </FeaturesWrapper>
      <BookingForm />
    </AdditionalInfoWrapper>
  );
};

export default ModalFeatures;
