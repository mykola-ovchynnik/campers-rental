import { useDispatch, useSelector } from 'react-redux';
import {
  campersSelector,
  pageSelector,
  setNextPage,
} from '../../store/campersReducer/campersSlice';
import { useEffect } from 'react';
import { getCampersThunk } from '../../store/thunk';

export const CampersList = () => {
  const campers = useSelector(campersSelector);
  const page = useSelector(pageSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampersThunk(page));
  }, [page, dispatch]);

  const handleLoadMore = () => {
    dispatch(setNextPage());
  };

  console.log(campers);
  return (
    <>
      <ul>
        {campers &&
          campers.map(camper => {
            return <li key={camper._id}>{camper.name}</li>;
          })}
      </ul>
      <button onClick={handleLoadMore}>Load more</button>
    </>
  );
};
