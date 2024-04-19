import styled from 'styled-components';

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
