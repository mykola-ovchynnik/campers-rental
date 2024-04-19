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

export const ItemNamePrice = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemName = styled.h2`
  font-weight: 600;
  line-height: 30px;
  font-size: 24px;
`;

export const ItemPrice = styled.p`
  font-weight: 600;
  line-height: 30px;
  font-size: 24px;
  margin-right: 10px;
  margin-left: auto;
`;

export const ShowMoreBtn = styled.button`
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
