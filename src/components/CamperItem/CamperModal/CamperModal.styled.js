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
