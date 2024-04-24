import { useDispatch, useSelector } from 'react-redux';
import {
  campersSelector,
  hasMoreSelector,
} from '../../store/campersReducer/campersSlice';
import { Suspense, useRef } from 'react';
import { getCampersThunk } from '../../store/thunk';
import { Camper } from '../CamperItem/Camper';
import {
  CampersListWrapper,
  CampersList,
  LoadMoreButton,
} from './CampersList.styled';
import { Outlet } from 'react-router-dom';

export const CampersListComponent = () => {
  const pageRef = useRef(1);
  const campers = useSelector(campersSelector);
  const hasMore = useSelector(hasMoreSelector);
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    pageRef.current += 1;

    dispatch(getCampersThunk(pageRef.current));
  };

  return (
    <CampersListWrapper>
      {campers && (
        <>
          <CampersList>
            {campers.map(camper => {
              return <Camper key={camper._id} camper={camper} />;
            })}
          </CampersList>

          {hasMore && (
            <LoadMoreButton type="button" onClick={handleLoadMore}>
              Load more
            </LoadMoreButton>
          )}
        </>
      )}
      <Suspense>
        <Outlet />
      </Suspense>
    </CampersListWrapper>
  );
};
