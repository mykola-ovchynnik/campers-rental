import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const HeaderStyled = styled.header`
  /* background-color: ${({ theme }) => theme.body}; */
  background-color: #f2f4f7;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const NavBar = styled.div`
  display: flex;
  gap: 32px;
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  transition: scale 0.2s;
  /* color: ${({ theme }) => theme.text}; */
  color: #101828;
  position: relative;

  &.active::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 3px;
    /* background-color: ${({ theme }) => theme.red}; */
    background-color: #e44848;
    z-index: 5;
  }

  &:hover {
    cursor: pointer;
  }
`;
