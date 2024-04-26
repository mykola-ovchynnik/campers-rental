import { createSlice } from '@reduxjs/toolkit';
import { getCamperByIdThunk, getCampersThunk, getFilteredCampersThunk } from '../thunk';
import {
  handleFulfilledCampers,
  handleFulfilledFilteredCampers,
  handleFulfilledSingleCamper,
} from './helpers';

const initialState = {
  campers: [],
  hasMore: false,
  singleCamper: {},
};

export const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    resetCampersCatalog() {
      return { campers: [] };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCampersThunk.fulfilled, handleFulfilledCampers)
      .addCase(getCamperByIdThunk.fulfilled, handleFulfilledSingleCamper)
      .addCase(getFilteredCampersThunk.fulfilled, handleFulfilledFilteredCampers);
  },
});

export const campersReducer = campersSlice.reducer;

export const { resetCampersCatalog } = campersSlice.actions;

export const campersSelector = state => state.campers.campers;
export const hasMoreSelector = state => state.campers.hasMore;
export const singleCamperSelector = state => state.campers.singleCamper;
