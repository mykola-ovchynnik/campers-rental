import styled from 'styled-components';
import { Button } from '../../styles/StyledComponents';

export const CampersListWrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
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
  max-width: 888px;
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

  &:hover {
    background-color: white;
    border: 1px solid var(--Button, #e44848);
  }
`;
