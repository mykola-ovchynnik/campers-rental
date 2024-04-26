import { HeaderStyled, HeaderWrapper, NavBar, NavLinkStyled } from './Header.styled';
import { Container } from '../../styles/StyledComponents';

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <HeaderWrapper>
          <NavLinkStyled to="/" className={'logo'}>
            Campers rental
          </NavLinkStyled>

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
        </HeaderWrapper>
      </Container>
    </HeaderStyled>
  );
};
