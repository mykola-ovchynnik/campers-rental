import { useForm } from 'react-hook-form';
import { Button } from '../../styles/StyledComponents';
import { FilterForm, FilterText } from './CatalogFilter.styled';
import { EquipmentFilter } from './EquipmentFilter/EquipmentFilter';
import { LocationFilter } from './LocationFilter/LocationFilter';
import { equipmentItems, typeItems } from '../../utils/filterItems';

export const CatalogFilter = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = filterData => {
    if (Object.values(filterData).every(value => !value)) {
      alert('Form is empty');
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
