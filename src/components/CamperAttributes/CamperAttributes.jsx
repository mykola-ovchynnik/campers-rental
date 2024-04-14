import {
  AttributeInfo,
  AttributeItem,
  AttributeSvg,
  AttributesList,
} from './CamperAttributes.styled';
import { ReactComponent as AdultsSVG } from '../../icons/adults.svg';
import { ReactComponent as TransmissionSVG } from '../../icons/transmission.svg';
import { ReactComponent as EngineSVG } from '../../icons/petrol.svg';
import { ReactComponent as kitchenSVG } from '../../icons/kitchen.svg';
import { ReactComponent as BedSVG } from '../../icons/bed.svg';
import { ReactComponent as AirConSVG } from '../../icons/ac.svg';

export const CamperAttributes = ({
  adults,
  transmission,
  engine,
  kitchen,
  beds,
  ac,
}) => {
  return (
    <AttributesList>
      <AttributeItem>
        <AttributeSvg as={AdultsSVG} />
        <AttributeInfo>2 adults</AttributeInfo>
      </AttributeItem>

      <AttributeItem>
        <AttributeSvg as={TransmissionSVG} />
        <AttributeInfo>Automatic</AttributeInfo>
      </AttributeItem>

      <AttributeItem>
        <AttributeSvg as={EngineSVG} />
        <AttributeInfo>Petrol</AttributeInfo>
      </AttributeItem>

      <AttributeItem>
        <AttributeSvg as={kitchenSVG} />
        <AttributeInfo>Kitchen</AttributeInfo>
      </AttributeItem>

      <AttributeItem>
        <AttributeSvg as={BedSVG} />
        <AttributeInfo>1 beds</AttributeInfo>
      </AttributeItem>

      <AttributeItem>
        <AttributeSvg as={AirConSVG} />
        <AttributeInfo>AC</AttributeInfo>
      </AttributeItem>
    </AttributesList>
  );
};
