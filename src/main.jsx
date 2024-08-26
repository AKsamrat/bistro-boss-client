import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Component/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import Menu from './Pages/Menu/Menu.jsx';
import Order from './Pages/OrderFood/Order';
import LoginPage from './Pages/LoginPage.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Register from './Pages/Register.jsx';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import Dashboard from './Dashboard/Dashboard.jsx';
import Cart from './Dashboard/Cart.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AllUsers from './Dashboard/Allusers/AllUsers';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },
      {
        path: '/order/:category',
        element: <Order></Order>,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: 'dashboard',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>,
      },
      {
        path: 'allUsers',
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
