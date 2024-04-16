import {
  HeaderStyled,
  HeaderWrapper,
  NavBar,
  NavLinkStyled,
} from './Header.styled';
import { Container } from '../../styles/StyledComponents';
// import ThemeToggle from '../ThemeToggle/ThemeToggle';

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <HeaderWrapper>
          <NavBar>
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

          {/* <ThemeToggle /> */}
        </HeaderWrapper>
      </Container>
    </HeaderStyled>
  );
};
