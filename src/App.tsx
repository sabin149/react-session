import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ChakraProvider } from '@chakra-ui/react';
import Router from 'router/Router';
import { Suspense } from 'react';
import Loading from 'components/common/Loading';

const queryClient = new QueryClient();

const App = () => {
  return (
    <ChakraProvider>
      <Suspense fallback={<Loading />}>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <Router />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Suspense>
    </ChakraProvider>
  );
};

export default App;
