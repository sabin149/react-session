import { lazy } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from 'layout/RootLayout';
import UserLayout from 'layout/UserLayout';
import ErrorBoundary from './ErrorBoundary';
import Home from 'pages/home/Home';

const AddUser = lazy(() => import('pages/users/AddUser'));
const UpdateUser = lazy(() => import('pages/users/UpdateUser'));
const ViewUsers = lazy(() => import('pages/users/ViewUsers'));

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} errorElement={<ErrorBoundary />}>
        <Route index element={<Home />} />
        <Route path='users' element={<UserLayout />}>
          <Route index element={<ViewUsers />} />
          <Route path='add' element={<AddUser />} />
          <Route path='update/:userId' element={<UpdateUser />} />
        </Route>
        <Route path='*' element={<ErrorBoundary isNotFoundError={true} />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Router;
