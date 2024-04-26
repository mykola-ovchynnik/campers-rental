import styled from 'styled-components';

export const RatingLocationWrapper = styled.div`
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
  stroke: #101828;
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
    background-color: #101828;
  }
`;
