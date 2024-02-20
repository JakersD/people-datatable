import { Main } from '@/pages/main';
import { createBrowserRouter } from 'react-router-dom';

const router = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <Main />,
    },
  ]);

export default router;
