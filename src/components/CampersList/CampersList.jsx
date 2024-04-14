import { useDispatch, useSelector } from 'react-redux';
import {
  campersSelector,
  pageSelector,
  resetCampersCatalog,
  setNextPage,
} from '../../store/campersReducer/campersSlice';
import { useEffect } from 'react';
import { getCampersThunk } from '../../store/thunk';
import { Camper } from '../CamperItem/Camper';
import { CamperList } from '../../styles/StyledComponents';

export const CampersList = () => {
  const campers = useSelector(campersSelector);
  const page = useSelector(pageSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampersThunk(1));
    return () => {
      dispatch(resetCampersCatalog());
    };
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(setNextPage());
    dispatch(getCampersThunk(page + 1));
  };

  console.log(campers);
  return (
    <>
      <CamperList>
        {campers &&
          campers.map(camper => {
            return <Camper key={camper._id} camper={camper} />;
          })}
      </CamperList>
      <button onClick={handleLoadMore}>Load more</button>
    </>
  );
};
