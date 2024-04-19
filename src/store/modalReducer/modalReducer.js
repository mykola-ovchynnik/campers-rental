import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isShowModal: false,
  },
  reducers: {
    showModal: state => {
      state.isShowModal = true;
    },
    hideModal: state => {
      state.isShowModal = false;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { showModal, hideModal } = modalSlice.actions;
export const selectorModal = state => state.modal.isShowModal;
