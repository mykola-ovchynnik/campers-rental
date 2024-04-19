import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: { favoriteCampers: [] },
  reducers: {
    addFavorite: (state, { payload }) => {
      if (!state.favoriteCampers.some(camper => camper._id === payload._id)) {
        state.favoriteCampers.push(payload);
      }
    },
    removeFavorite: (state, { payload }) => {
      state.favoriteCampers = state.favoriteCampers.filter(
        camper => camper._id !== payload._id
      );
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export const selectorFavorites = state => state.favorites.favoriteCampers;
