import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import appRouter from './router';

import './styles/index.scss';
import './locales-config';

import { setupStore } from './store';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <Provider store={setupStore()}>
    <RouterProvider router={appRouter()} />
  </Provider>,
);
