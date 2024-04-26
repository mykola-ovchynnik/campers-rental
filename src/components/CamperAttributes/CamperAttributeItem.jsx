import { AttributeInfo, AttributeItem, AttributeSvg } from './CamperAttributes.styled';

import icons from '../../icons/icons.svg';

export const CamperAttributeItem = ({ svg, info }) => {
  return (
    <AttributeItem>
      <AttributeSvg>
        <use xlinkHref={`${icons}#icon-${svg}`} />
      </AttributeSvg>
      <AttributeInfo>{info}</AttributeInfo>
    </AttributeItem>
  );
};
