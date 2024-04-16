import { useForm } from 'react-hook-form';
import { Button } from '../../styles/StyledComponents';
import { FilterForm, FilterText } from './CatalogFilter.styled';
import { EquipmentFilter } from './EquipmentFilter/EquipmentFilter';
import { LocationFilter } from './LocationFilter/LocationFilter';
import { getCampersThunk } from '../../store/thunk';
import { equipmentItems } from '../../utils/filterItems';
import { typeItems } from '../../utils/filterItems';

export const CatalogFilter = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = data => {
    if (Object.values(data).length === 0) {
      alert('Form is empty');
    } else {
      console.log(data);
    }
  };

  return (
    <FilterForm id="filterForm" onSubmit={handleSubmit(onSubmit)}>
      <LocationFilter register={register} />

      <FilterText>Filters</FilterText>

      <EquipmentFilter
        legend={'Vehicle Equipment'}
        itemsArr={equipmentItems}
        register={register}
      />

      <EquipmentFilter
        legend={'Vehicle Type'}
        itemsArr={typeItems}
        register={register}
      />

      <Button type="submit">Search</Button>
    </FilterForm>
  );
};
