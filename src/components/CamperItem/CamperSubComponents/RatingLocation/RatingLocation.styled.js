import styled from 'styled-components';

export const RatingLocationWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 16px;
`;

export const RatingsLocationSpan = styled.span`
  display: flex;
  align-items: center;
`;

export const StarLocationIcon = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 4px;
  stroke: ${({ theme }) => theme.text};
`;

export const RatingLocation = styled.p`
  font-weight: 400;
  position: relative;

  &.rating::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.text};
  }
`;