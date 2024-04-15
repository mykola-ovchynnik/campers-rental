// import { useEffect } from 'react';
import { Container } from '../styles/StyledComponents';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCampersThunk } from '../store/thunk';
// import {
//   campersSelector,
//   pageSelector,
//   setNextPage,
// } from '../store/campersReducer/campersSlice';
import { CampersListComponent } from '../components/CampersList/CampersListComponent';

export const CampersCatalog = () => {
  return (
    <Container>
      <CampersListComponent />
    </Container>
  );
};
