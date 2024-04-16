import {
  CamperItem,
  ListItemImage,
  ItemMainInfo,
  ButtonShowMore,
} from './Camper.styled';
import { Button, CamperDescription } from '../../styles/StyledComponents';

import { CamperAttributes } from '../CamperAttributes/CamperAttributes';
import { useLocation } from 'react-router-dom';
import { CamperNamePrice } from './CamperSubComponents/ItemNamePrice';
import { RatingLocationComponent } from './CamperSubComponents/RatingLocationComponent';

export const Camper = ({ camper }) => {
  const location = useLocation();

  return (
    <CamperItem>
      <ListItemImage src={camper.gallery[0]} />

      <ItemMainInfo>
        <CamperNamePrice camper={camper} />

        <RatingLocationComponent camper={camper} />

        <CamperDescription>{camper.description}</CamperDescription>

        <CamperAttributes camper={camper} />

        <Button
          as={ButtonShowMore}
          to={`/catalog/${camper._id}`}
          state={{ from: location }}
        >
          Show more
        </Button>
      </ItemMainInfo>
    </CamperItem>
  );
};
