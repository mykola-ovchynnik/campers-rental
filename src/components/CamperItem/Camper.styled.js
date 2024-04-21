import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CamperItem = styled.li`
  display: flex;
  gap: 24px;
  padding: 24px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.border};
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
  color: var(--gray-color);
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
  background: var(--red-color);
  color: var(--white-color);
  font-weight: 500;
  letter-spacing: -0.08px;
  line-height: 24px;
  transition: transform 0.1s ease-in-out;

  &:hover {
    background-color: var(--red-color-hover);
    cursor: pointer;
  }

  &:active {
    transform: scale(0.9);
  }
`;
