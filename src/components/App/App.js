import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { HomePage } from '../../pages/HomePage';
import { FavoritesPage } from '../../pages/FavoritesPage';
import { CampersCatalog } from '../../pages/CampersCatalog/CampersCataloge';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { darkTheme, lightTheme } from '../../styles/themes';
import { themeSelector } from '../../store/themeReducer/themeSlice';
import { CamperModal } from '../CamperItem/CamperModal/CamperModal';

export const App = () => {
  const darkMode = useSelector(themeSelector);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="/catalog" element={<CampersCatalog />}>
            <Route path="/catalog/:id" element={<CamperModal />}>
              <Route
                path="/catalog/:id/features"
                // element={<AdditionalInfo />}
              />
              <Route
                path="/catalog/:id/reviews"
                // element={<AdditionalInfo />}
              />
            </Route>
          </Route>

          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>

        <Route path="*" element={<Layout />} />
      </Routes>
    </ThemeProvider>
  );
};
