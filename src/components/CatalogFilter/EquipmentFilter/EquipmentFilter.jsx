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

export const EquipmentFilter = ({
  legend,
  itemsArr,
  register,
  type,
  name = '',
}) => {
  return (
    <Fieldset>
      <Legend>{legend}</Legend>

      <FilterItemsContainer>
        {itemsArr.map((item, index) => (
          <FilterItemLabel htmlFor={item.name} key={index}>
            <FilterCheckbox
              {...(name === '' ? register(item.name) : register(name))}
              type={type}
              id={item.name}
              name={name === '' ? item.name : name}
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
