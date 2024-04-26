import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCampers, getCamperById, getFilterdCampers } from '../api/api';

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
      return rejectWithValue(error.message);
    }
  }
);

export const getCamperByIdThunk = createAsyncThunk(
  'campers/getCamperById',
  async (id, { rejectWithValue }) => {
    try {
      const camper = await getCamperById(id);

      if (!camper || Object.keys(camper).length === 0) {
        throw new Error(`Camper with id ${id} not found. :( Please, try again.`);
      }

      return camper;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getFilteredCampersThunk = createAsyncThunk(
  'filteredCampers/getCampers',
  async (filter, { rejectWithValue }) => {
    try {
      const campers = await getFilterdCampers(filter);

      return { campers, hasMore: false };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
