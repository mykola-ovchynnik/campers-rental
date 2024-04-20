import { useDispatch, useSelector } from 'react-redux';
import { CamperWindow, ModalBackdrop } from './CamperModal.styled';
import { useCallback, useEffect } from 'react';
import { getCamperByIdThunk } from '../../../store/thunk';
import { useParams, useNavigate } from 'react-router-dom';
import { singleCamperSelector } from '../../../store/campersReducer/campersSlice';
import { useEscapeClose } from '../../../hooks/useEscapeClose';
import { useBackdropClose } from '../../../hooks/useBackdropClose';
import { removeBodyModal, setBodyModal } from '../../../utils/bodyInteraction';
import { RatingLocationComponent } from '../CamperSubComponents/RatingLocation/RatingLocationComponent';

export const CamperModal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const camper = useSelector(singleCamperSelector);

  const closeModal = useCallback(() => {
    navigate('/catalog');
  }, [navigate]);

  const handleKeyDown = useEscapeClose(closeModal);
  const handleBackdropClick = useBackdropClose(closeModal);

  useEffect(() => {
    setBodyModal(handleKeyDown);
    dispatch(getCamperByIdThunk(id));

    return () => {
      removeBodyModal(handleKeyDown);
    };
  }, [dispatch, handleKeyDown, id]);

  return (
    <ModalBackdrop onClick={handleBackdropClick}>
      <CamperWindow>
        <RatingLocationComponent camper={camper} />
      </CamperWindow>
    </ModalBackdrop>
  );
};
