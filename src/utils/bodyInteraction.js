export const setBodyModal = handleKeyDown => {
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = '17px';
  document.addEventListener('keydown', handleKeyDown);
};

export const removeBodyModal = handleKeyDown => {
  document.body.style.overflow = 'auto';
  document.body.style.paddingRight = '0';
  document.removeEventListener('keydown', handleKeyDown);
};
