import {
  FilterLocationWrapper,
  FilterTextInput,
  LocationSvg,
  TextInputLabel,
} from '../CatalogFilter.styled';
import { ReactComponent as LocationSVG } from '../../../icons/location.svg';
import { validateInput } from '../../../utils/utils';
import { useState } from 'react';

export const LocationFilter = ({ register, setValue }) => {
  const [isValid, setIsValid] = useState(true);

  return (
    <FilterLocationWrapper>
      <TextInputLabel htmlFor="location">Location</TextInputLabel>

      <FilterTextInput
        {...register('location')}
        type="text"
        id="location"
        name="location"
        placeholder="City"
        pattern="/^[A-Za-z,\s]*$/"
        onChange={e => {
          validateInput(e, setValue, setIsValid);
        }}
        style={{
          border: isValid === true ? 'none' : `2px solid #E44848`,
        }}
      ></FilterTextInput>

      <LocationSvg as={LocationSVG} />
    </FilterLocationWrapper>
  );
};
