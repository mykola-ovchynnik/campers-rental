import styled from 'styled-components';
import { ReactComponent as HeartSVG } from '../icons/heart.svg';

export const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 64px;
  padding-right: 64px;
`;

export const CamperList = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 888px;
`;

export const HeartIcon = styled(HeartSVG)`
  fill: ${props => (props.isfavorite ? '#E44848' : 'none')};
  stroke: ${props => (props.isfavorite ? 'none' : '#101828')};
  transition: transform 0.1s ease-in-out;
  cursor: pointer;
`;

export const HeartButton = styled.button`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  padding: 0;
  border: 0;
  background-color: transparent;

  transition: transform 0.1s ease-in-out;

  &:active {
    transform: scale(0.9);
  }
`;

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

export const CamperDescription = styled.p`
  display: inline-block;
  color: #475467;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 24px;
`;
