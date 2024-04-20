import { useCallback } from 'react';

export const useEscapeClose = closeModal => {
  return useCallback(
    e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );
};
