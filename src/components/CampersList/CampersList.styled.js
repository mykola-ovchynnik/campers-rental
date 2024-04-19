import styled from 'styled-components';
import { Button } from '../../styles/StyledComponents';

export const CampersListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;

export const CampersList = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 888px;
  }
`;

export const LoadMoreButton = styled(Button)`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 16px 32px;
  background-color: white;
  color: var(--black-color);
  border-radius: 200px;
  border: 1px solid rgba(71, 84, 103, 0.2);
  transition: border 0.1s ease-in-out, transform 0.1s ease-in-out;
  width: 100%;

  &:hover {
    background-color: white;
    border: 1px solid var(--Button, #e44848);
  }

  @media (min-width: 768px) {
    width: auto;
  }
`;
