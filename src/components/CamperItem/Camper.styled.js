import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CamperItem = styled.li`
  display: flex;
  gap: 24px;
  padding: 24px;
  border-radius: 20px;
  border: 1px solid rgba(16, 24, 40, 0.2);
`;

export const ListItemImage = styled.img`
  width: 290px;
  height: 310px;
  flex-shrink: 0;
  border-radius: 10px;
  object-fit: cover;
  background: lightgray center center no-repeat;
`;

export const ItemMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 526px;
`;

export const ItemNamePrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemName = styled.h2`
  font-weight: 600;
  line-height: 30px;
  font-size: 24px;
`;

export const ItemPriceFavorite = styled.span`
  display: flex;
  gap: 11px;

  align-items: center;
`;

export const ItemPrice = styled.p`
  font-weight: 600;
  line-height: 30px;
  font-size: 24px;
`;

export const ButtonShowMore = styled(Link)`
  margin-top: 24px;
  width: 166px;
  height: 56px;
  display: flex;
  padding: 16px 40px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 200px;
  background: #e44848;
  color: #ffffff;
  font-weight: 500;
  letter-spacing: -0.08px;
  transition: transform 0.1s ease-in-out;

  &:hover {
    background-color: #d84343;
    cursor: pointer;
  }

  &:active {
    transform: scale(0.9);
  }
`;
