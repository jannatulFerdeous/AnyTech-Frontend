import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import { dashboardRoutes } from './Routes/dashboard';
import { aboutRoutes } from './Routes/about';
import { servicesRoutes } from './Routes/services';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/en/" replace />,
  },
  {
    path: '/en',
    element: <Layout />,
    children: [...dashboardRoutes, ...aboutRoutes, ...servicesRoutes],
  },
]);
