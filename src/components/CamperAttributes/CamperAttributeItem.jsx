import {
  AttributeInfo,
  AttributeItem,
  AttributeSvg,
} from './CamperAttributes.styled';

export const CamperAttributeItem = ({ svg, info }) => {
  return (
    <AttributeItem>
      <AttributeSvg as={svg} />
      <AttributeInfo>{info}</AttributeInfo>
    </AttributeItem>
  );
};
