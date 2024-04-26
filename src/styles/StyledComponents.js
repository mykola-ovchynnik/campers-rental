import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 64px;
  padding-right: 64px;
`;

export const Button = styled.button`
  width: 166px;
  height: 56px;
  display: flex;
  padding: 16px 40px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 200px;
  background: #e44848;
  color: #fff;
  font-weight: 500;
  letter-spacing: -0.08px;
  line-height: 24px;
  transition: transform 0.1s ease-in-out;

  &:hover {
    background-color: #d84343;
    cursor: pointer;
  }

  &:active {
    transform: scale(0.9);
  }

  &:disabled {
    background: gray;
  }
`;
