import { Container } from '../../styles/StyledComponents';
import { CampersListComponent } from '../../components/CampersList/CampersListComponent';
import { CatalogFilter } from '../../components/CatalogFilter/CatalogFilter';
import { useEffect } from 'react';
import { getCampersThunk } from '../../store/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { campersSelector } from '../../store/campersReducer/campersSlice';
import { CatalogPage, CatalogTheme } from './CampersCatalog.styled.js';

export const CampersCatalog = () => {
  const campers = useSelector(campersSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    campers.length <= 0 && dispatch(getCampersThunk(1));
    return () => {};
  }, [dispatch, campers.length]);

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
