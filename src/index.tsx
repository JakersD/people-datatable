import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.scss';

import { Main } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <Main />
  </>,
);
