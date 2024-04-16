import styled from 'styled-components';
import { ReactComponent as HeartSVG } from '../icons/heart.svg';

export const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 64px;
  padding-right: 64px;
`;

export const CatalogPage = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  gap: 64px;
`;

export const HeartIcon = styled(HeartSVG)`
  fill: ${props => (props.isfavorite ? 'var(--red-color)' : 'none')};
  stroke: ${props => (props.isfavorite ? 'none' : 'var(--black-color)')};
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
    background-color: var(--black-color);
  }
`;

export const CamperDescription = styled.p`
  display: inline-block;
  color: var(--gray-color);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 24px;
`;

export const Button = styled.button`
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
