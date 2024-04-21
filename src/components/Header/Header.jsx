import {
  HeaderStyled,
  HeaderWrapper,
  NavBar,
  NavLinkStyled,
} from './Header.styled';
import { Container } from '../../styles/StyledComponents';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <HeaderWrapper>
          <NavLinkStyled to="/">Campers rental</NavLinkStyled>

          <NavBar>
            <ThemeToggle />

            <NavLinkStyled to="/" activeclassname="active">
              Home
            </NavLinkStyled>

            <NavLinkStyled to="/catalog" activeclassname="active">
              Catalog
            </NavLinkStyled>

            <NavLinkStyled to="/favorites" activeclassname="active">
              Favorites
            </NavLinkStyled>
          </NavBar>
        </HeaderWrapper>
      </Container>
    </HeaderStyled>
  );
};
