import { createBrowserRouter, Navigate,
  
 } from 'react-router-dom';
import Layout from './Layout/Layout';



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/en/" replace />,
  },
  {
    path: '/en',
    element: <Layout />, 
    children: [
      
    ],
  },
]);