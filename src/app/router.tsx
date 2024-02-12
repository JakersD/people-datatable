import { createBrowserRouter } from 'react-router-dom';
import { DatatablePage } from '../pages/data-table';

const router = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <DatatablePage />,
    },
  ]);

export default router;
