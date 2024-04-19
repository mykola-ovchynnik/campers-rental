import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 64px;
  padding-right: 64px;
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
