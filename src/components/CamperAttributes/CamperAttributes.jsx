import { AttributesList } from './CamperAttributes.styled';
import { CamperAttributeItem } from './CamperAttributeItem';

export const CamperAttributes = ({ attributes }) => {
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
