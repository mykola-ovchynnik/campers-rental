import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  width: 100vw;
  min-height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.modalBackdrop};
  z-index: 99;

  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`;

export const CamperWindow = styled.div`
  max-width: 982px;
  min-height: 720px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 24px;

  border-radius: 20px;
  background: ${({ theme }) => theme.body};
`;

export const ImageGallery = styled.ul`
  display: flex;
  gap: 16px;
`;

export const ModalInfo = styled.div`
  display: flex;
  gap: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding-bottom: 24px;
`;

export const AdditionalInfoButton = styled(Link)`
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  position: relative;

  &.active::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.border};
    z-index: 5;
  }
`;
