import { useEffect } from 'react';
import { Container } from '../styles/StyledComponents';
import { useDispatch, useSelector } from 'react-redux';
import { getCampersThunk } from '../store/thunk';
import {
  campersSelector,
  pageSelector,
} from '../store/campersReducer/campersSlice';

export const HomePage = () => {
  const campers = useSelector(campersSelector);
  const page = useSelector(pageSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('before dispatch');
    dispatch(getCampersThunk(page));
  }, [page, dispatch]);
  console.log(campers);
  return (
    <Container>
      <h1>Home Page</h1>
    </Container>
  );
};
