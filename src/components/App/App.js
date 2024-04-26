import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { darkTheme, lightTheme } from '../../styles/themes';
import { themeSelector } from '../../store/themeReducer/themeSlice';
import { GlobalLoader } from '../GlobalLoader/GlobalLoader';
import { lazy } from 'react';
import { ModalReviews } from '../CamperItem/CamperModal/ModalReviews/ModalReviews';

const CampersCatalog = lazy(() => import('../../pages/CampersCatalog/CampersCataloge'));
const HomePage = lazy(() => import('../../pages/HomePage'));
const FavoritesPage = lazy(() => import('../../pages/FavoritesPage/FavoritesPage'));
const CamperModal = lazy(() => import('../CamperItem/CamperModal/CamperModal'));
const ModalFeatures = lazy(() => import('../CamperItem/CamperModal/ModalFeatures/ModalFeatures'));

export const App = () => {
  const darkMode = useSelector(themeSelector);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="/catalog" element={<CampersCatalog />}>
            <Route path="/catalog/:id" element={<CamperModal />}>
              <Route path="/catalog/:id/features" element={<ModalFeatures />} />
              <Route path="/catalog/:id/reviews" element={<ModalReviews />} />
            </Route>
          </Route>

          <Route path="/favorites" element={<FavoritesPage />}>
            <Route path="/favorites/:id" element={<CamperModal />}>
              <Route path="/favorites/:id/features" element={<ModalFeatures />} />
              <Route path="/favorites/:id/reviews" element={<ModalReviews />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<Layout />} />
      </Routes>

      <GlobalLoader />
    </ThemeProvider>
  );
};
