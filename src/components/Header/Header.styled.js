import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.header};
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const NavBar = styled.nav`
  display: flex;
  gap: 32px;
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  transition: scale 0.2s;
  color: ${({ theme }) => theme.text};
  position: relative;

  &.active::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -27px;
    width: 100%;
    height: 5px;
    background-color: ${({ theme }) => theme.activePage};
    z-index: 5;
  }

  &:hover {
    cursor: pointer;
  }

  &.logo::after {
    content: none;
  }
`;
