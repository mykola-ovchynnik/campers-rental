import { campersReducer } from './campersReducer/campersSlice';
import { persistReducer } from 'redux-persist';
import { favoritesReducer } from './favoritesReducer/favoritesSlice';
import { rootReducer } from './root/rootSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, favoritesReducer);

export const reducer = {
  campers: campersReducer,
  favorites: persistedReducer,
  root: rootReducer,
};
