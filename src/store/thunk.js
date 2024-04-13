import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCampers } from '../api/api';

export const getCampersThunk = createAsyncThunk(
  'campers/getCampers',
  async (page, { rejectWithValue }) => {
    try {
      return getCampers(page);
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
