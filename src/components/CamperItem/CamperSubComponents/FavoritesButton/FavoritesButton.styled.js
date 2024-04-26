import styled from 'styled-components';

export const HeartIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${props => (props.isfavorite ? '#E44848' : 'none')};
  stroke: ${props => (props.isfavorite ? 'none' : '#101828')};
  transition: transform 0.1s ease-in-out;
  cursor: pointer;
`;

export const HeartButton = styled.button`
  position: absolute;
  right: 0;
  flex-shrink: 0;
  padding: 0;
  border: 0;
  background-color: transparent;

  transition: transform 0.1s ease-in-out;

  &:active {
    transform: scale(0.9);
  }
`;
