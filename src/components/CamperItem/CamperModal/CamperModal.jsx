import { useDispatch, useSelector } from 'react-redux';
import { CamperWindow, ModalBackdrop } from './CamperModal.styled';
import { Suspense, useCallback, useEffect } from 'react';
import { getCamperByIdThunk } from '../../../store/thunk';
import { useParams, useNavigate, Outlet, useLocation } from 'react-router-dom';
import { singleCamperSelector } from '../../../store/campersReducer/campersSlice';
import { useEscapeClose } from '../../../hooks/useEscapeClose';
import { useBackdropClose } from '../../../hooks/useBackdropClose';
import { removeBodyModal, setBodyModal } from '../../../utils/bodyInteraction';
import { ModalHeadComponent } from './ModalSubComp/modalHead/ModalHeadComponent';
import { ModalImageList } from './ModalSubComp/ModalImageList/ModalImageList';
import { CamperDescription } from '../Camper.styled';
import { ModalAdditionalInfo } from './ModalSubComp/ModalAdditionalInfo/ModalAdditionalInfo';
import Loader from '../../GlobalLoader/Globalloader.styled';

const CamperModal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const camper = useSelector(singleCamperSelector);
  const location = useLocation();

  const basePath = location.pathname.includes('favorites') ? '/favorites' : '/catalog';

  const closeModal = useCallback(() => {
    navigate(`${basePath}`);
  }, [navigate, basePath]);

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
        <ModalHeadComponent camper={camper} />

        <ModalImageList images={camper.gallery}></ModalImageList>

        <CamperDescription className="modalDescription">{camper.description}</CamperDescription>

        <ModalAdditionalInfo camper={camper} />

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </CamperWindow>
    </ModalBackdrop>
  );
};

export default CamperModal;
