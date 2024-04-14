// import { useEffect } from 'react';
import { Container } from '../styles/StyledComponents';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCampersThunk } from '../store/thunk';
// import {
//   campersSelector,
//   pageSelector,
//   setNextPage,
// } from '../store/campersReducer/campersSlice';
import { CampersList } from '../components/CampersList/CampersList';

export const CampersCatalog = () => {
  return (
    <Container>
      <h2>Campers catalog page</h2>
      <CampersList />
    </Container>
  );
};
