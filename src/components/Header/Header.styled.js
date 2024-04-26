import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const HeaderStyled = styled.header`
  background-color: #f2f4f7;
  border-bottom: 1px solid rgba(16, 24, 40, 0.2);
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
  color: #101828;
  position: relative;

  &.active::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -27px;
    width: 100%;
    height: 5px;
    background-color: #e44848;
    z-index: 5;
  }

  &:hover {
    cursor: pointer;
  }

  &.logo::after {
    content: none;
  }
`;
