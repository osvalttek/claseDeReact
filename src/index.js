import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/main/home/Home';
import PersonajesListContainer from './components/main/personajes/PersonajesListContainer';
import PersonajeDataContainer from './components/main/personaje/PersonajeDataContainer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/personajes",
        element: <PersonajesListContainer />
      },
      {
        path: "/personaje/:id",
        element: <PersonajeDataContainer />
      }
    ]
  },


])

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

