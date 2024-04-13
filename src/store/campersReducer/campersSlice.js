import { createSlice } from '@reduxjs/toolkit';
import { getCampersThunk } from '../thunk';
import { handleFulfilledCampers } from './helpers';

export const campersSlice = createSlice({
  name: 'campers',
  initialState: { campers: [], page: 1 },
  reducers: {
    setNextPage(state) {
      state.page += 1;
    },
  },
  extraReducers: builder => {
    builder.addCase(getCampersThunk.fulfilled, handleFulfilledCampers);
  },
});

export const campersReducer = campersSlice.reducer;

export const { setNextPage } = campersSlice.actions;

export const campersSelector = state => state.campers.campers;
export const pageSelector = state => state.campers.page;
