import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCampers, getCamperById } from '../api/api';

export const getCampersThunk = createAsyncThunk(
  'campers/getCampers',
  async (page, { rejectWithValue }) => {
    try {
      const campers = await getCampers(page);

      if (campers.length < 4) {
        return { campers, hasMore: false };
      }

      return { campers, hasMore: true };
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getCamperByIdThunk = createAsyncThunk(
  'campers/getCamperById',
  async (id, { rejectWithValue }) => {
    try {
      return await getCamperById(id);
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
