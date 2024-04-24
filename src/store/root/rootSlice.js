import { createSlice } from '@reduxjs/toolkit';
import { handlePending, handleRejected, handleFulfilled } from './handlers';

const rootSlice = createSlice({
  name: 'root',
  initialState: {
    isLoading: false,
    error: '',
  },
  extraReducers: builder => {
    builder
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected)
      .addMatcher(action => action.type.endsWith('fulfilled'), handleFulfilled);
  },
});

export const rootReducer = rootSlice.reducer;
export const GlobalLoadingSelector = state => state.root.isLoading;
export const GlobalErrorSelector = state => state.root.error;
