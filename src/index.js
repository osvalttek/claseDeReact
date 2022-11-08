import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Error from './components/error/Error';
import ProductContainer from './components/main/product/ProductContainer';
import ProductsContainer from './components/main/products/ProductsContainer';
import Register from './components/register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: "home",
      },
      {
        path: "/about",
        element: "about",
      },
      {
        path: "/products",
        element: <ProductsContainer />,
      },
      {
        path: "/product/:id",
        element: <ProductContainer />,
      },
      {
        path: "/cart",
        element: "cart",
      }

    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: "login",

  }

])


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
);

