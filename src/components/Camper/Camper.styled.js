import styled from 'styled-components';

export const CamperItem = styled.li`
  display: flex;
  gap: 24px;
  padding: 24px;
`;

export const CamperItemImage = styled.img`
  width: 290px;
  height: 310px;
  flex-shrink: 0;
  border-radius: 10px;
  object-fit: cover;
  background: lightgray center center no-repeat;
`;

export const CamperItemMainInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CamperItemNamePrice = styled.div`
  display: flex;
`;

export const CamperItemName = styled.h2`
  font-weight: 600;
  line-height: 30px;
`;

export const CamperItemPriceFavorite = styled.span`
  display: flex;
  gap: 11px;
`;

export const CamperItemPrice = styled.p`
  font-weight: 600;
  line-height: 30px;
`;

export const HeartButton = styled.button`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: auto;

  &:hover svg {
    cursor: pointer;
  }
`;
