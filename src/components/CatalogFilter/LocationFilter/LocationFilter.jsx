import {
  FilterLocationWrapper,
  FilterTextInput,
  LocationSvg,
  TextInputLabel,
} from '../CatalogFilter.styled';
import { ReactComponent as LocationSVG } from '../../../icons/location.svg';

export const LocationFilter = ({ register }) => {
  return (
    <FilterLocationWrapper>
      <TextInputLabel htmlFor="location">Location</TextInputLabel>

      <FilterTextInput
        {...register('location')}
        type="text"
        id="location"
        name="location"
        placeholder="City"
      ></FilterTextInput>

      <LocationSvg as={LocationSVG} />
    </FilterLocationWrapper>
  );
};
