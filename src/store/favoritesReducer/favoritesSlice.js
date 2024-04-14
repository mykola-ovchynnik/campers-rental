import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: { favoriteCampers: [] },
  reducers: {
    addFavorite: (state, { payload }) => {
      if (!state.favoriteCampers.includes(payload)) {
        state.favoriteCampers.push(payload);
      }
    },
    removeFavorite: (state, { payload }) => {
      state.favoriteCampers = state.favoriteCampers.filter(
        id => id !== payload
      );
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export const selectorFavorites = state => state.favorites.favoriteCampers;
