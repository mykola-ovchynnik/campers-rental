import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  width: 100vw;
  min-height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(17, 18, 19, 0.4);
  z-index: 99;

  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`;

export const CamperWindow = styled.div`
  overflow-y: auto;
  width: 982px;
  height: 80vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
  position: relative;

  border-radius: 20px;
  background: #fff;

  & > *:not(:last-child) {
    margin-bottom: 24px;
  }

  & > *:nth-last-child(2) {
    margin-bottom: 44px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #d9d9d9;
    border-radius: 7px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const ImageGallery = styled.ul`
  display: flex;
  gap: 16px;
`;

export const ModalInfo = styled.div`
  display: flex;
  gap: 40px;
  border-bottom: 1px solid rgba(16, 24, 40, 0.2);
  padding-bottom: 24px;
`;

export const AdditionalInfoButton = styled(NavLink)`
  color: #101828;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  position: relative;

  &.active::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -27px;
    width: 100%;
    height: 5px;
    background-color: #e44848;
    z-index: 5;
  }
`;

export const AdditionalInfoWrapper = styled.div`
  display: flex;
  gap: 24px;
`;
