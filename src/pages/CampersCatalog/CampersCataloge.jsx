import { Container } from '../../styles/StyledComponents';
import { CampersListComponent } from '../../components/CampersList/CampersListComponent';
import { CatalogFilter } from '../../components/CatalogFilter/CatalogFilter';
import { useEffect } from 'react';
import { getCampersThunk } from '../../store/thunk';
import { useDispatch } from 'react-redux';
import { resetCampersCatalog } from '../../store/campersReducer/campersSlice';
import { CatalogPage, CatalogTheme } from './CampersCatalog.styled.js';

export const CampersCatalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampersThunk(1));
    return () => {
      dispatch(resetCampersCatalog());
    };
  }, [dispatch]);

  return (
    <CatalogTheme>
      <Container>
        <CatalogPage>
          <CatalogFilter />
          <CampersListComponent />
        </CatalogPage>
      </Container>
    </CatalogTheme>
  );
};
