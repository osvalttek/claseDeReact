import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './router/router';
import {RouterProvider } from 'react-router-dom';


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

