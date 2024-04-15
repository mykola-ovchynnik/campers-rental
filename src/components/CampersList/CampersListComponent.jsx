import { useDispatch, useSelector } from 'react-redux';
import {
  campersSelector,
  resetCampersCatalog,
} from '../../store/campersReducer/campersSlice';
import { useEffect, useRef } from 'react';
import { getCampersThunk } from '../../store/thunk';
import { Camper } from '../CamperItem/Camper';
import {
  CampersListWrapper,
  CampersList,
  LoadMoreButton,
} from './CampersList.styled';

export const CampersListComponent = () => {
  const pageRef = useRef(1);
  const campers = useSelector(campersSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampersThunk(pageRef.current));
    return () => {
      dispatch(resetCampersCatalog());
    };
  }, [dispatch]);

  const handleLoadMore = () => {
    pageRef.current += 1;
    dispatch(getCampersThunk(pageRef.current));
  };

  console.log(campers);
  return (
    <CampersListWrapper>
      <CampersList>
        {campers &&
          campers.map(camper => {
            return <Camper key={camper._id} camper={camper} />;
          })}
      </CampersList>

      <LoadMoreButton type="button" onClick={handleLoadMore}>
        Load more
      </LoadMoreButton>
    </CampersListWrapper>
  );
};
