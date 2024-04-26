import { Container } from '../../styles/StyledComponents';
import { selectorFavorites } from '../../store/favoritesReducer/favoritesSlice';
import { CampersList } from '../../components/CampersList/CampersList.styled';
import { Camper } from '../../components/CamperItem/Camper';
import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { FavoritesPageWrapper } from './FavoritesPage.styled';

const FavoritesPage = () => {
  const campers = useSelector(selectorFavorites);

  return (
    <Container>
      <FavoritesPageWrapper>
        <h2>Yor favorite campers</h2>

        {campers.length <= 0 ? (
          <h2>No campers added to favorites</h2>
        ) : (
          <CampersList>
            {campers.map(camper => {
              return <Camper key={camper._id} camper={camper} />;
            })}
          </CampersList>
        )}

        <Suspense>
          <Outlet />
        </Suspense>
      </FavoritesPageWrapper>
    </Container>
  );
};

export default FavoritesPage;
