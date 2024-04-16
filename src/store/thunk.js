import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCampers } from '../api/api';

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
