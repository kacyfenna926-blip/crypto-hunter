import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Context from './utils/Context.js';
import { RouterProvider } from 'react-router-dom';
import { router } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </React.StrictMode>
);
