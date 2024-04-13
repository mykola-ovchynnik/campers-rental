import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { HomePage } from '../../pages/HomePage';
import { FavoritesPage } from '../../pages/FavoritesPage';
import { Camper } from '../Camper/Camper';
import { Features } from '../Features/Features';
import { Reviews } from '../Reviews/Reviews';
import { CampersCatalog } from '../../pages/CampersCataloge';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { themeSelector } from '../../store/selectors';
import { darkTheme, lightTheme } from '../../styles/themes';

export const App = () => {
  const darkMode = useSelector(themeSelector);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="/campers" element={<CampersCatalog />} />

          <Route path="/campers/:camperId" element={<Camper />}>
            <Route path="/campers/:camperId/features" element={<Features />} />
            <Route path="/campers/:camperId/reviews" element={<Reviews />} />
          </Route>

          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>

        <Route path="*" />
      </Routes>
    </ThemeProvider>
  );
};
