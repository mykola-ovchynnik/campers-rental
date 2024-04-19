import { useDispatch, useSelector } from 'react-redux';
import { ModalBackdrop } from './CamperModal.styled';
import { useEffect } from 'react';
import { getCamperByIdThunk } from '../../../store/thunk';
import { useParams } from 'react-router-dom';
import { singleCamperSelector } from '../../../store/campersReducer/campersSlice';

export const CamperModal = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(singleCamperSelector);

  useEffect(() => {
    // document.body.style.overflow = 'hidden';
    dispatch(getCamperByIdThunk(id));
    return () => {
      // document.body.style.overflow = 'auto';
    };
  }, [dispatch]);

  return (
    <ModalBackdrop>
      <h1>Modal</h1>
    </ModalBackdrop>
  );
};
