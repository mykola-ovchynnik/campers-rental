import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { HomePage } from '../../pages/HomePage';
import { CampersPage } from '../../pages/CampersPage';
import { FavoritesPage } from '../../pages/FavoritesPage';
import { Camper } from '../Camper/Camper';
import { Features } from '../Features/Features';
import { Reviews } from '../Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="/campers" element={<CampersPage />} />

        <Route path="/campers/:camperId" element={<Camper />}>
          <Route path="/campers/:camperId/features" element={<Features />} />
          <Route path="/campers/:camperId/reviews" element={<Reviews />} />
        </Route>

        <Route path="/favorites" element={<FavoritesPage />} />
      </Route>

      <Route path="*" />
    </Routes>
  );
};
