import styled from 'styled-components';

export const FilterForm = styled.form`
  max-width: 360px;
  display: flex;
  flex-direction: column;
`;

export const FilterLocationWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: fit-content;
`;

export const FilterText = styled.p`
  color: var(--gray-color);
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
  stroke: rgba(16, 24, 40, 0.6); /* default color */
`;

export const FilterTextInput = styled.input`
  width: 360px;
  height: 56px;
  display: flex;
  padding-left: 44px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border: none;
  border-radius: 10px;
  background: var(--white-color);
  line-height: 20px;

  &::placeholder {
    color: rgba(16, 24, 40, 0.6);
  }

  &:focus {
    outline: none;
  }

  &:focus + ${LocationSvg}, &:not(:placeholder-shown) + ${LocationSvg} {
    stroke: var(--black-color);
  }
`;

export const TextInputLabel = styled.label`
  color: rgba(16, 24, 40, 0.6);
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
  color: #101828;

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
    background-color: rgba(16, 24, 40, 0.1);
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
  border: 1px solid rgba(16, 24, 40, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const FilterCheckbox = styled.input`
  display: none;

  &:checked + ${FilterItemWrapper} {
    border-color: var(--red-color);
  }
`;

export const FilterItemLabel = styled.label`
  &:hover {
    cursor: pointer;
  }
`;

export const FilterIcon = styled.svg`
  width: 32px;
  height: 32px;
`;

export const ItemName = styled.p`
  width: 95px;
  text-align: center;
  color: var(--black-color);
  font-weight: 500;
  line-height: 20px;
`;
