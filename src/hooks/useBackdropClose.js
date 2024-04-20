import { useCallback } from 'react';

export const useBackdropClose = closeModal => {
  return useCallback(
    e => {
      if (e.target === e.currentTarget) {
        closeModal();
      }
    },
    [closeModal]
  );
};
