import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpenModal: false,
    modalId: null,
  },
  reducers: {
    showModal: (state, { payload }) => {
      state.isOpenModal = true;
      state.modalId = payload;
    },
    hideModal: state => {
      state.isOpenModal = false;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { showModal, hideModal } = modalSlice.actions;
export const selectorModal = state => state.modal.isOpenModal;
export const selectorModalId = state => state.modal.modalId;
