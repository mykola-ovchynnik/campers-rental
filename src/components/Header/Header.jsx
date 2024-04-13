import {
  HeaderStyled,
  HeaderWrapper,
  NavBar,
  NavLinkStyled,
} from './Header.styled';
import { Container } from '../../styles/StyledComponents';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <HeaderWrapper>
          <NavBar>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/campers">Catalog</NavLinkStyled>
            <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
          </NavBar>

          <ThemeToggle />
        </HeaderWrapper>
      </Container>
    </HeaderStyled>
  );
};
