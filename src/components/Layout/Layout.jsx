import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

export const Layout = () => {
  return (
    <main>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </main>
  );
};
