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

export const ModalFeatures = () => {
  const camper = useSelector(singleCamperSelector);
  const attributes = getAttributes(camper, true);

  return (
    <>
      <FeaturesWrapper>
        <CamperAttributes attributes={attributes} />
        <ModalDetails>
          <ModalDetailsTitle>Vehicle details</ModalDetailsTitle>
          <ModalDetailsList>
            <ModalDetailsItem>
              <ModalDetailsText>Form</ModalDetailsText>
              <ModalDetailsText>{camper.form}</ModalDetailsText>
            </ModalDetailsItem>
            <ModalDetailsItem>
              <ModalDetailsText>Length</ModalDetailsText>
              <ModalDetailsText>{camper.length}</ModalDetailsText>
            </ModalDetailsItem>
            <ModalDetailsItem>
              <ModalDetailsText>Width</ModalDetailsText>
              <ModalDetailsText>{camper.width}</ModalDetailsText>
            </ModalDetailsItem>
            <ModalDetailsItem>
              <ModalDetailsText>Height</ModalDetailsText>
              <ModalDetailsText>{camper.height}</ModalDetailsText>
            </ModalDetailsItem>
            <ModalDetailsItem>
              <ModalDetailsText>Tank</ModalDetailsText>
              <ModalDetailsText>{camper.tank}</ModalDetailsText>
            </ModalDetailsItem>
            <ModalDetailsItem>
              <ModalDetailsText>Consumption</ModalDetailsText>
              <ModalDetailsText>{camper.consumption}</ModalDetailsText>
            </ModalDetailsItem>
          </ModalDetailsList>
        </ModalDetails>
      </FeaturesWrapper>
    </>
  );
};
