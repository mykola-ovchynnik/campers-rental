import { useForm } from 'react-hook-form';
import { Button } from '../../styles/StyledComponents';
import { FilterForm, FilterText } from './CatalogFilter.styled';
import { EquipmentFilter } from './EquipmentFilter/EquipmentFilter';
import { LocationFilter } from './LocationFilter/LocationFilter';
import { equipmentItems, typeItems } from '../../utils/filterItems';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { getFilteredCampersThunk } from '../../store/thunk';

export const CatalogFilter = () => {
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();

  const onSubmit = filterData => {
    if (Object.values(filterData).every(value => !value)) {
      toast.error('Please select at least one filter for search');
    }

    dispatch(getFilteredCampersThunk(filterData));
  };

  return (
    <FilterForm id="filterForm" onSubmit={handleSubmit(onSubmit)}>
      <LocationFilter register={register} setValue={setValue} />

      <FilterText>Filters</FilterText>

      <EquipmentFilter
        legend={'Vehicle Equipment'}
        itemsArr={equipmentItems}
        register={register}
        type={'checkbox'}
        name={''}
      />

      <EquipmentFilter
        legend={'Vehicle Type'}
        itemsArr={typeItems}
        register={register}
        type={'radio'}
        name={'vehicleType'}
      />

      <Button type="submit">Search</Button>
    </FilterForm>
  );
};
