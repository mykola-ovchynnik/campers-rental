import styled from 'styled-components';

export const FilterForm = styled.form`
  max-width: 360px;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

export const FilterLocationWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: fit-content;
`;

export const FilterText = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  font-weight: 500;
  line-height: 24px;
  margin-top: 32px;
  margin-bottom: 14px;
`;

export const LocationSvg = styled.svg`
  width: 18px;
  height: 20px;
  position: absolute;
  left: 18px;
  bottom: 18px;
  stroke: ${({ theme }) => theme.placeholder};
`;

export const FilterTextInput = styled.input`
  color: inherit;
  width: 360px;
  height: 56px;
  display: flex;
  padding-left: 44px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border: 'none';

  border-radius: 10px;
  background: ${({ theme }) => theme.input};
  line-height: 20px;

  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }

  &:focus {
    outline: none;
  }

  &:focus + ${LocationSvg}, &:not(:placeholder-shown) + ${LocationSvg} {
    stroke: ${({ theme }) => theme.iconStroke};
  }
`;

export const TextInputLabel = styled.label`
  font-weight: 500;
  line-height: 24px;
`;

export const Fieldset = styled.fieldset`
  padding: 0;
  border: none;
  position: relative;
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 64px;
  }
`;

export const Legend = styled.legend`
  position: relative;
  margin-bottom: 48px;

  font-size: 20px;
  font-weight: 600;
  line-height: 24px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -24px;
    width: 360px;
    height: 1px;
    background-color: ${({ theme }) => theme.border};
    z-index: 5;
  }
`;

export const FilterItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 10px;
`;

export const FilterItemWrapper = styled.div`
  width: 113px;
  height: 95px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.border};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const FilterCheckbox = styled.input`
  display: none;

  &[type='checkbox']:checked
    + ${FilterItemWrapper},
    &[type='radio']:checked
    + ${FilterItemWrapper} {
    border-color: ${({ theme }) => theme.filterChecked};
  }

  &[type='radio']:not(:checked) + ${FilterItemWrapper} {
    border-color: ${({ theme }) => theme.border};
  }
`;

export const FilterItemLabel = styled.label`
  &:hover {
    cursor: pointer;
  }
`;

export const FilterIcon = styled.svg`
  stroke: ${({ theme }) => theme.iconStroke};
  fill: ${({ theme }) => theme.iconFill};
  width: 32px;
  height: 32px;
`;

export const ItemName = styled.p`
  width: 95px;
  text-align: center;
  font-weight: 500;
  line-height: 20px;
`;
