import { ReactComponent as AdultsSVG } from '../icons/adults.svg';
import { ReactComponent as TransmissionSVG } from '../icons/transmission.svg';
import { ReactComponent as EngineSVG } from '../icons/petrol.svg';
import { ReactComponent as kitchenSVG } from '../icons/kitchen.svg';
import { ReactComponent as BedSVG } from '../icons/bed.svg';
import { ReactComponent as AirConSVG } from '../icons/ac.svg';

export const getAttributes = (camper, returnAll = false) => {
  const mainAttributes = [
    { svg: AdultsSVG, info: `${camper.adults} adults` },
    { svg: TransmissionSVG, info: camper.transmission },
    { svg: EngineSVG, info: camper.engine },
    {
      svg: kitchenSVG,
      info: 'Kitchen',
      condition: camper.details.kitchen >= 1,
    },
    { svg: BedSVG, info: `${camper.details.beds} beds` },
    {
      svg: AirConSVG,
      info: 'AC',
      condition: camper.details.airConditioner >= 1,
    },
  ];

  const allAttributes = [...mainAttributes];

  return returnAll ? allAttributes : mainAttributes;
};
