import { useLocation } from 'react-router-dom';
import { Container } from '../../styles/StyledComponents';
import { CtaButton, HeroImg, HeroInfo, HeroWrapper, MainTitle, Subtitle } from './HomePage.styled';

const HomePage = () => {
  const location = useLocation();

  return (
    <Container>
      <HeroWrapper>
        <HeroInfo>
          <MainTitle>Discover the world with us</MainTitle>

          <Subtitle>
            Experience the freedom of the open road like never before with our premium camper
            rentals. Embark on your next adventure today
          </Subtitle>

          <CtaButton to="/catalog" state={{ from: location }}>
            Book now
          </CtaButton>
        </HeroInfo>

        <HeroImg
          src="https://www.adria-mobil.com/storage/2336/image_1994-large.jpg"
          alt="a couple near the camper van at the sunset"
        />
      </HeroWrapper>
    </Container>
  );
};

export default HomePage;
