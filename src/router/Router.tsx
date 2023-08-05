import { lazy } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from 'layout/RootLayout';
import UserLayout from 'layout/UserLayout';
import Calculate from 'pages/calculate/Calculate';

const AddUser = lazy(() => import('pages/AddUser'));
const UpdateUser = lazy(() => import('pages/UpdateUser'));
const ViewUsers = lazy(() => import('pages/ViewUsers'));

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route path='users' element={<UserLayout />}>
          <Route index element={<ViewUsers />} />
          <Route path='add' element={<AddUser />} />
          <Route path='update/:userId' element={<UpdateUser />} />
        </Route>
        <Route path='calculate' element={<Calculate />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Router;
