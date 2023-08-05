import { Box } from '@chakra-ui/react';
import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const RootLayout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100dvh'
      }}
    >
      <ScrollRestoration />
      <Header />
      <Box flexGrow={1}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default RootLayout;
