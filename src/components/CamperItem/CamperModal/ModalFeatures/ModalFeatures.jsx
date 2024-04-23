import { useSelector } from 'react-redux';
import { singleCamperSelector } from '../../../../store/campersReducer/campersSlice';
import { getAttributes } from '../../../../utils/getAttributes';
import { CamperAttributes } from '../../../CamperAttributes/CamperAttributes';
import { FeaturesWrapper } from './ModalFeatures.styled';

export const ModalFeatures = () => {
  const camper = useSelector(singleCamperSelector);
  const attributes = getAttributes(camper, true);

  return (
    <>
      <FeaturesWrapper>
        <CamperAttributes attributes={attributes} />;
      </FeaturesWrapper>
    </>
  );
};
