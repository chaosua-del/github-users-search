import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { theme } from './shared/theme';
import { Main, User } from './pages';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  { path: '/:id', element: <User /> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </QueryClientProvider>
);
