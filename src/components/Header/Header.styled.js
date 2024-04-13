import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.body};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 24px;
  margin-bottom: 100px;
`;

export const NavBar = styled.div`
  display: flex;
  gap: 24px;
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  transition: scale 0.3s;
  color: ${({ theme }) => theme.text};

  &:hover {
    cursor: pointer;
    scale: 1.1;
  }
`;
