import {
  Fieldset,
  FilterCheckbox,
  FilterIcon,
  FilterItemLabel,
  FilterItemWrapper,
  FilterItemsContainer,
  ItemName,
  Legend,
} from '../CatalogFilter.styled';

export const EquipmentFilter = ({ legend, itemsArr, register }) => {
  return (
    <Fieldset>
      <Legend>{legend}</Legend>

      <FilterItemsContainer>
        {itemsArr.map((item, index) => (
          <FilterItemLabel htmlFor={item.name} key={index}>
            <FilterCheckbox
              {...register(item.name)}
              type="checkbox"
              id={item.name}
              name={item.name}
              value={item.name}
            />

            <FilterItemWrapper>
              <FilterIcon as={item.svg}></FilterIcon>
              <ItemName>{item.name}</ItemName>
            </FilterItemWrapper>
          </FilterItemLabel>
        ))}
      </FilterItemsContainer>
    </Fieldset>
  );
};
