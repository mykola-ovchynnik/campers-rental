import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { HomePage } from '../../pages/HomePage';
import { FavoritesPage } from '../../pages/FavoritesPage';
import { Features } from '../Features/Features';
import { Reviews } from '../Reviews/Reviews';
import { CampersCatalog } from '../../pages/CampersCataloge';
import { CamperItem } from '../CamperItem/Camper.styled';
// import { ThemeProvider } from 'styled-components';
// import { useSelector } from 'react-redux';
// import { darkTheme, lightTheme } from '../../styles/themes';
// import { themeSelector } from '../../store/themeReducer/themeSlice';

export const App = () => {
  // const darkMode = useSelector(themeSelector);

  return (
    // <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="/catalog" element={<CampersCatalog />} />

        <Route path="/catalog/:camperId" element={<CamperItem />}>
          <Route path="/catalog/:camperId/features" element={<Features />} />
          <Route path="/catalog/:camperId/reviews" element={<Reviews />} />
        </Route>

        <Route path="/favorites" element={<FavoritesPage />} />
      </Route>

      <Route path="*" element={<Layout />} />
    </Routes>
    // </ThemeProvider>
  );
};
