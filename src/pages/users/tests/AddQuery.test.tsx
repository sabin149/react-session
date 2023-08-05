import { renderHook, waitFor } from '@testing-library/react';
import { useGetUsers } from 'queries/users/UserQuery';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { expect, test } from 'vitest';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ turns retries off
      retry: false
    }
  }
});
const wrapper = ({ children }: { children: React.ReactNode }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;

test('my first test', async () => {
  const { result } = renderHook(() => useGetUsers(), {
    wrapper
  });
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
});
