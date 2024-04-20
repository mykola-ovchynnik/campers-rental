import styled from 'styled-components';
import { ReactComponent as HeartSVG } from '../../../../icons/heart.svg';

export const HeartIcon = styled(HeartSVG)`
  fill: ${props => (props.isfavorite ? props.theme.favoritesIconFill : 'none')};
  stroke: ${props => (props.isfavorite ? 'none' : props.theme.iconStroke)};
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