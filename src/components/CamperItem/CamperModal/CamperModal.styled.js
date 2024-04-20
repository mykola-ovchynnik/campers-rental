import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.modalBackdrop};
  z-index: 99;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CamperWindow = styled.div`
  width: 982px;
  min-height: 720px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  border-radius: 20px;
  background: ${({ theme }) => theme.body};
`;
