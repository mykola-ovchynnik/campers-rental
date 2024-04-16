import { createSlice } from '@reduxjs/toolkit';
import { getCampersThunk } from '../thunk';
import { handleFulfilledCampers } from './helpers';

export const campersSlice = createSlice({
  name: 'campers',
  initialState: { campers: [] },
  reducers: {
    resetCampersCatalog() {
      return { campers: [] };
    },
  },
  extraReducers: builder => {
    builder.addCase(getCampersThunk.fulfilled, handleFulfilledCampers);
  },
});

export const campersReducer = campersSlice.reducer;

export const { resetCampersCatalog } = campersSlice.actions;

export const campersSelector = state => state.campers.campers;
export const hasMoreSelector = state => state.campers.hasMore;
