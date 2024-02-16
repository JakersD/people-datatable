import { createBrowserRouter } from 'react-router-dom';
import { Main } from '../pages/data-table';

const router = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <Main />,
    },
  ]);

export default router;
