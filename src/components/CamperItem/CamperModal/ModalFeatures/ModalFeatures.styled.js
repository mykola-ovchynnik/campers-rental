import styled from 'styled-components';

export const FeaturesWrapper = styled.div`
  width: 430px;
  display: flex;
  flex-direction: column;
  gap: 44px;
`;

export const ModalDetails = styled.div``;

export const ModalDetailsTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -24px;
    width: 100%;
    height: 1px;
    background-color: rgba(16, 24, 40, 0.2);
    z-index: 5;
  }
`;

export const ModalDetailsList = styled.ul`
  margin-top: 48px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const ModalDetailsItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const ModalDetailsText = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
`;
