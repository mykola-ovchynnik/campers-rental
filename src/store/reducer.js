import { campersReducer } from './campersReducer/campersSlice';
import { themeReducer } from './themeReducer/themeSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { favoritesReducer } from './favoritesReducer/favoritesSlice';
import { modalReducer } from './modalReducer/modalReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, favoritesReducer);

export const reducer = {
  theme: themeReducer,
  campers: campersReducer,
  favorites: persistedReducer,
  modal: modalReducer,
};
