import { createSlice } from '@reduxjs/toolkit';
import { getCampersThunk } from '../thunk';
import { handleFulfilledCampers } from './helpers';

const initialState = { campers: [], page: 1 };

export const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    setNextPage(state) {
      state.page += 1;
    },
    resetCampersCatalog(state) {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder.addCase(getCampersThunk.fulfilled, handleFulfilledCampers);
  },
});

export const campersReducer = campersSlice.reducer;

export const { setNextPage, resetCampersCatalog } = campersSlice.actions;

export const campersSelector = state => state.campers.campers;
export const pageSelector = state => state.campers.page;
