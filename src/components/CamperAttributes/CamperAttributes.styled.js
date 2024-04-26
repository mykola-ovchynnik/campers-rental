import styled from 'styled-components';

export const AttributesList = styled.ul`
  max-width: 100%;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 8px;
`;

export const AttributeItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 18px;
  border-radius: 100px;
  background: #f7f7f7;
  font-weight: 500;
  line-height: 20px;
`;

export const AttributeSvg = styled.svg`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  fill: #101828;
`;

export const AttributeInfo = styled.p`
  font-weight: 500;
  line-height: 20px;
  text-transform: capitalize;
`;
