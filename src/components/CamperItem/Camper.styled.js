import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CamperItem = styled.li`
  display: flex;
  gap: 24px;
  padding: 24px;
  border-radius: 20px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  width: 100%;
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
  justify-content: space-between;
  max-width: 526px;
`;

export const CamperDescription = styled.p`
  display: inline;
  color: #475467;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 24px;
  width: 100%;

  &.modalDescription {
    margin-top: 0;
    white-space: break-spaces;
    overflow: visible;
  }
`;

export const ItemNamePrice = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 526px;
  margin-bottom: 10px;
`;

export const ItemName = styled.h2`
  font-weight: 600;
  line-height: 30px;
  font-size: 24px;

  &.modalName {
    margin-bottom: 10px;
  }
`;

export const ItemPrice = styled.p`
  font-weight: 600;
  line-height: 30px;
  font-size: 24px;
  margin-right: 30px;

  &.modalPrice {
    margin-top: 16px;
    margin-right: 0;
  }
`;

export const ShowMoreBtn = styled(Link)`
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
  color: #fff;
  font-weight: 500;
  letter-spacing: -0.08px;
  line-height: 24px;
  transition: transform 0.1s ease-in-out;

  &:hover {
    background-color: #d84343;
    cursor: pointer;
  }

  &:active {
    transform: scale(0.9);
  }
`;
