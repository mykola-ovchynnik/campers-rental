import { campersReducer } from './campersReducer/campersSlice';
import { themeReducer } from './themeReducer/themeSlice';

export const reducer = {
  theme: themeReducer,
  campers: campersReducer,
};
