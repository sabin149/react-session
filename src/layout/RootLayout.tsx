import { Box } from '@chakra-ui/react';
import Header from 'components/common/Header';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const RootLayout = () => {
  return (
    <Box height={'100vh'} width={'100vw'}>
      <ScrollRestoration />
      <Header />
      <Outlet />
    </Box>
  );
};

export default RootLayout;
