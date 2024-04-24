import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import Loader from '../GlobalLoader/Globalloader.styled';

export const Layout = () => {
  return (
    <main>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};
