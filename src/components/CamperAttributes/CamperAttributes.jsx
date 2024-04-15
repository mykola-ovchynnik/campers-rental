import { AttributesList } from './CamperAttributes.styled';
import { CamperAttributeItem } from './CamperAttributeItem';
import { getAttributes } from '../../utils/getAttributes';

export const CamperAttributes = ({ camper }) => {
  const attributes = getAttributes(camper);

  return (
    <AttributesList>
      {attributes.map(
        (attribute, index) =>
          attribute.condition !== false && (
            <CamperAttributeItem
              key={index}
              svg={attribute.svg}
              info={attribute.info}
            />
          )
      )}
    </AttributesList>
  );
};
