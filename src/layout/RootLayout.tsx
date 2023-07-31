import Header from 'components/common/Header';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet />
    </>
  );
};

export default RootLayout;
