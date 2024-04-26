import styled from 'styled-components';
import { ReactComponent as HeartSVG } from '../../../../icons/heart.svg';

export const HeartIcon = styled(HeartSVG)`
  fill: ${props => (props.isfavorite ? '#E44848' : 'none')};
  stroke: ${props => (props.isfavorite ? 'none' : '#101828')};
  transition: transform 0.1s ease-in-out;
  cursor: pointer;
`;

export const HeartButton = styled.button`
  position: absolute;
  right: 0;
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
