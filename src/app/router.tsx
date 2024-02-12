import { createBrowserRouter } from 'react-router-dom';
import { DatatablePage } from '../pages/datatable';

const router = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <DatatablePage />,
    },
  ]);

export default router;
