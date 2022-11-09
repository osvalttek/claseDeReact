import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ProductContainer from "../components/main/product/ProductContainer"
import ProductsContainer from '../components/main/products/ProductsContainer';
import Register from '../components/register/Register';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: "Erroooooo",
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


export default router